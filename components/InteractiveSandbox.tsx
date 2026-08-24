"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Play, RotateCcw, Sparkles, Code2, Cpu, GitFork, CornerDownLeft } from "lucide-react";
import confetti from "canvas-confetti";
import { soundManager } from "@/lib/sound";

type LabMode = "array_algo" | "tree_graph" | "big_o_radar" | "terminal";

interface TreeNode {
  id: number;
  val: number;
  x: number;
  y: number;
  left?: number;
  right?: number;
}

const TREE_NODES: Record<number, TreeNode> = {
  1: { id: 1, val: 50, x: 200, y: 35, left: 2, right: 3 },
  2: { id: 2, val: 25, x: 100, y: 110, left: 4, right: 5 },
  3: { id: 3, val: 75, x: 300, y: 110, left: 6, right: 7 },
  4: { id: 4, val: 12, x: 50, y: 185 },
  5: { id: 5, val: 38, x: 150, y: 185 },
  6: { id: 6, val: 62, x: 250, y: 185 },
  7: { id: 7, val: 90, x: 350, y: 185 },
};

const TREE_EDGES = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 6 },
  { from: 3, to: 7 },
];

export default function InteractiveSandbox() {
  const [activeTab, setActiveTab] = useState<LabMode>("array_algo");

  // 1. Array State
  const [array, setArray] = useState<number[]>([12, 24, 35, 48, 56, 68, 79, 88, 95]);
  const [targetNum, setTargetNum] = useState<number>(68);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);
  const [pointerLabels, setPointerLabels] = useState<{ low?: number; mid?: number; high?: number }>({});
  const [isRunning, setIsRunning] = useState(false);
  const [stepText, setStepText] = useState("Select a target and click 'Search Target'");

  // 2. Tree/Graph State
  const [activeTreeNode, setActiveTreeNode] = useState<number | null>(null);
  const [visitedTreeNodes, setVisitedTreeNodes] = useState<number[]>([]);
  const [treeSearchTarget, setTreeSearchTarget] = useState<number>(62);
  const [treeStatusText, setTreeStatusText] = useState("Select a node value and test BST traversal.");

  // 3. Big-O Complexity Slider
  const [inputScale, setInputScale] = useState<number>(1000);

  // 4. Terminal State
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; out: string | React.ReactNode }>>([
    {
      cmd: "help",
      out: "Available commands: 'whoami', 'skills', 'dsa', 'projects', 'education', 'contact', 'sudo hire', 'clear'",
    },
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Array Algorithm Simulation
  const runBinarySearch = async () => {
    if (isRunning) return;
    setIsRunning(true);
    soundManager.playBeep(580, 0.08);
    setFoundIndex(null);

    let low = 0;
    let high = array.length - 1;
    setStepText(`Initializing Binary Search for target: ${targetNum}...`);

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      setActiveIndices([low, mid, high]);
      setPointerLabels({ low, mid, high });
      soundManager.playStep();
      setStepText(`Search space [${low} .. ${high}]: checking mid [${mid}] = ${array[mid]}`);
      await new Promise((r) => setTimeout(r, 750));

      if (array[mid] === targetNum) {
        setFoundIndex(mid);
        setActiveIndices([mid]);
        setStepText(`✓ Target ${targetNum} found at index [${mid}] in O(log N) comparisons!`);
        soundManager.playBeep(880, 0.18);
        setIsRunning(false);
        return;
      }

      if (array[mid] < targetNum) {
        setStepText(`${array[mid]} < ${targetNum} ➔ Discarding left half. Moving low to ${mid + 1}.`);
        low = mid + 1;
      } else {
        setStepText(`${array[mid]} > ${targetNum} ➔ Discarding right half. Moving high to ${mid - 1}.`);
        high = mid - 1;
      }
      await new Promise((r) => setTimeout(r, 600));
    }

    setStepText(`Target ${targetNum} not present in sorted array.`);
    setIsRunning(false);
  };

  const resetArray = () => {
    soundManager.playStep();
    setActiveIndices([]);
    setFoundIndex(null);
    setPointerLabels({});
    setIsRunning(false);
    setStepText("Ready to run simulation.");
  };

  // BST Traversal Simulation
  const runBstSearch = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setVisitedTreeNodes([]);
    setActiveTreeNode(1);
    soundManager.playBeep(580, 0.08);

    let currentId = 1;
    const path: number[] = [];

    while (currentId) {
      const node = TREE_NODES[currentId];
      if (!node) break;

      path.push(currentId);
      setVisitedTreeNodes([...path]);
      setActiveTreeNode(currentId);
      soundManager.playStep();

      setTreeStatusText(`Evaluating Node (${node.val}) against Target (${treeSearchTarget})...`);
      await new Promise((r) => setTimeout(r, 800));

      if (node.val === treeSearchTarget) {
        setTreeStatusText(`✓ Located target node (${node.val}) in ${path.length} tree depth traversals!`);
        soundManager.playBeep(880, 0.18);
        setIsRunning(false);
        return;
      }

      if (treeSearchTarget < node.val) {
        setTreeStatusText(`${treeSearchTarget} < ${node.val} ➔ Traversed left branch.`);
        currentId = node.left || 0;
      } else {
        setTreeStatusText(`${treeSearchTarget} > ${node.val} ➔ Traversed right branch.`);
        currentId = node.right || 0;
      }
      await new Promise((r) => setTimeout(r, 600));
    }

    setTreeStatusText(`Node ${treeSearchTarget} not found in this tree branch.`);
    setIsRunning(false);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    soundManager.playStep();

    let output: string | React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = "Commands: 'whoami', 'skills', 'dsa', 'projects', 'education', 'contact', 'sudo hire', 'clear'";
        break;
      case "whoami":
        output = "Prateek Yadav — B.Tech Computer Science student, Software Engineer, Competitive Programmer & Problem Solver.";
        break;
      case "skills":
        output = "Languages: C++, TypeScript, JavaScript, Java, Python | Backend: Next.js, Node.js, PostgreSQL, Prisma | Core: DSA, OOP, Git";
        break;
      case "dsa":
        output = "LeetCode: 190+ Solved (1548 Peak Rating) | Total: 350+ Problems across LeetCode, Codolio, Codeforces, GFG.";
        break;
      case "projects":
        output = "1. PayPilot AI: Intelligent real-time payment risk & fraud detection platform with Graph ML | 2. PhysioConnect: Healthcare clinical workflow & tele-rehab portal.";
        break;
      case "education":
        output = "B.Tech in Computer Science & Engineering (2024–2028) at Galgotias College of Engineering and Technology.";
        break;
      case "contact":
        output = "Email: prateekyadav8006@gmail.com | LinkedIn: linkedin.com/in/prateekyadav360 | GitHub: github.com/TechPrateek";
        break;
      case "sudo hire":
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        soundManager.playBeep(780, 0.2);
        output = "🚀 OFFER INITIATED: Congratulations! You are hiring a dedicated engineer who builds with algorithmic rigor and scalable architecture.";
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        output = `Command not recognized: '${cmd}'. Type 'help' for valid commands.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: terminalInput, out: output }]);
    setTerminalInput("");
    setTimeout(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section id="interactive-lab" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10 sm:mb-16">
        <span className="text-[11px] font-mono text-zinc-500 dark:text-[#5A5A5A] uppercase tracking-[0.25em]">
          04 // INTERACTIVE ENGINEERING LAB
        </span>
        <div className="h-[1px] flex-1 bg-black/10 dark:bg-white/[0.08]" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 dark:text-[#F5F5F5]">
            Algorithmic <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 dark:from-sky-400 dark:via-cyan-300 dark:to-sky-300">Simulation Lab.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-[#8A8A8A] max-w-xl">
            Live interactive simulations of binary search partitioning, binary search tree traversals, asymptotic complexity scales, and the developer shell.
          </p>
        </div>

        {/* 4-Tab Navigation Selector */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-100 dark:bg-[#101010] border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-lg">
          <button
            onClick={() => {
              soundManager.playStep();
              setActiveTab("array_algo");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "array_algo"
                ? "bg-zinc-950 dark:bg-sky-500 text-white dark:text-black font-bold shadow-sm dark:shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                : "text-zinc-600 dark:text-[#8A8A8A] hover:text-black dark:hover:text-white"
            }`}
          >
            Array Pointer
          </button>

          <button
            onClick={() => {
              soundManager.playStep();
              setActiveTab("tree_graph");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "tree_graph"
                ? "bg-zinc-950 dark:bg-sky-500 text-white dark:text-black font-bold shadow-sm dark:shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                : "text-zinc-600 dark:text-[#8A8A8A] hover:text-black dark:hover:text-white"
            }`}
          >
            BST Tree Traversal
          </button>

          <button
            onClick={() => {
              soundManager.playStep();
              setActiveTab("big_o_radar");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "big_o_radar"
                ? "bg-zinc-950 dark:bg-sky-500 text-white dark:text-black font-bold shadow-sm dark:shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                : "text-zinc-600 dark:text-[#8A8A8A] hover:text-black dark:hover:text-white"
            }`}
          >
            Big-O Scale
          </button>

          <button
            onClick={() => {
              soundManager.playStep();
              setActiveTab("terminal");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "terminal"
                ? "bg-zinc-950 dark:bg-sky-500 text-white dark:text-black font-bold shadow-sm dark:shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                : "text-zinc-600 dark:text-[#8A8A8A] hover:text-black dark:hover:text-white"
            }`}
          >
            CLI Terminal
          </button>
        </div>
      </div>

      {/* Main Lab Window Container */}
      <div className="relative rounded-3xl bg-white dark:bg-[#0E0E0E] border border-zinc-200 dark:border-white/15 p-6 sm:p-10 shadow-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
        {/* TAB 1: ARRAY & BINARY SEARCH VISUALIZER */}
        {activeTab === "array_algo" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Target Picker */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs font-mono text-zinc-600 dark:text-[#8A8A8A] font-semibold">CHOOSE SEARCH TARGET:</span>
                <div className="flex items-center gap-1.5">
                  {[24, 48, 68, 88].map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        soundManager.playStep();
                        setTargetNum(t);
                        resetArray();
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all border cursor-pointer ${
                        targetNum === t
                          ? "bg-sky-500 text-black font-bold border-sky-400"
                          : "bg-zinc-100 dark:bg-white/[0.04] text-zinc-800 dark:text-zinc-300 border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/30"
                      }`}
                    >
                      Target: {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Array Bar Display */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-[#070707] border border-zinc-200 dark:border-white/[0.08] flex flex-col justify-between min-h-[270px]">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-[#8A8A8A] border-b border-zinc-200 dark:border-white/5 pb-3">
                  <span>SORTED ARRAY MEMORY BUFFER</span>
                  <span className="text-sky-600 dark:text-sky-400 font-semibold">O(log N) BINARY PARTITION</span>
                </div>

                <div className="flex items-end justify-center gap-2 sm:gap-3 py-6 h-40">
                  {array.map((val, idx) => {
                    const isActive = activeIndices.includes(idx);
                    const isFound = foundIndex === idx;
                    const isLow = pointerLabels.low === idx;
                    const isMid = pointerLabels.mid === idx;
                    const isHigh = pointerLabels.high === idx;
                    const heightPct = (val / 100) * 100;

                    return (
                      <div key={idx} className="flex flex-col items-center gap-1.5 flex-1 max-w-[48px] relative">
                        {/* Dynamic Pointer Badges */}
                        <div className="h-5 flex items-center justify-center">
                          {isMid ? (
                            <span className="text-[9px] font-mono font-bold text-sky-700 dark:text-sky-400 bg-sky-100 dark:bg-sky-950 px-1 rounded border border-sky-300 dark:border-sky-600">
                              MID
                            </span>
                          ) : isLow ? (
                            <span className="text-[9px] font-mono text-zinc-600 dark:text-zinc-400 font-bold">L</span>
                          ) : isHigh ? (
                            <span className="text-[9px] font-mono text-zinc-600 dark:text-zinc-400 font-bold">H</span>
                          ) : null}
                        </div>

                        <span className="text-[10px] font-mono text-zinc-600 dark:text-[#8A8A8A] font-medium">{val}</span>
                        <motion.div
                          animate={{
                            height: `${heightPct}%`,
                            backgroundColor: isFound
                              ? "#10B981"
                              : isMid
                              ? "#0284C7"
                              : isActive
                              ? "rgba(56, 189, 248, 0.4)"
                              : "rgba(161, 161, 170, 0.3)",
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          className={`w-full rounded-t-lg transition-all ${
                            isFound
                              ? "shadow-[0_0_20px_rgba(16,185,129,0.7)]"
                              : isMid
                              ? "shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                              : ""
                          }`}
                        />
                        <span className="text-[9px] font-mono text-zinc-500 dark:text-[#5A5A5A]">[{idx}]</span>
                      </div>
                    );
                  })}
                </div>

                {/* Step feedback display */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-800 dark:text-zinc-200 bg-white dark:bg-white/[0.03] p-3 rounded-xl border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none">
                  <Sparkles size={14} className="text-sky-500 dark:text-sky-400 shrink-0" />
                  <span className="truncate font-medium">{stepText}</span>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={runBinarySearch}
                  disabled={isRunning}
                  className="flex-1 py-3 rounded-xl bg-zinc-950 dark:bg-sky-500 hover:bg-zinc-800 dark:hover:bg-sky-400 text-white dark:text-black font-bold text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm dark:shadow-[0_0_20px_rgba(56,189,248,0.3)] disabled:opacity-50 cursor-pointer"
                >
                  <Play size={15} />
                  <span>{isRunning ? "Partitioning Array..." : `Search Target (${targetNum})`}</span>
                </button>

                <button
                  onClick={resetArray}
                  disabled={isRunning}
                  className="p-3 rounded-xl bg-zinc-100 dark:bg-white/[0.05] hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-600 dark:text-[#8A8A8A] hover:text-black dark:hover:text-white transition-colors border border-zinc-200 dark:border-white/10 cursor-pointer"
                  aria-label="Reset array simulation"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>

            {/* Right: Asymptotic Code Block */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-4 rounded-2xl bg-zinc-900 dark:bg-[#050505] border border-zinc-800 dark:border-white/10 font-mono text-xs text-zinc-300 shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 dark:border-white/10 text-[10px] text-zinc-400 dark:text-[#5A5A5A]">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Code2 size={12} className="text-sky-400" />
                    C++ Binary Search Logic
                  </span>
                  <span>Time: O(log N) | Space: O(1)</span>
                </div>
                <pre className="text-sky-300 leading-relaxed overflow-x-auto no-scrollbar">
                  <code>{`int binarySearch(vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) 
            return mid; // O(1) lookup
        if (arr[mid] < target) 
            low = mid + 1; // Discard left
        else 
            high = mid - 1; // Discard right
    }
    return -1;
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BST TREE TRAVERSAL VISUALIZER */}
        {activeTab === "tree_graph" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Target Picker */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs font-mono text-zinc-600 dark:text-[#8A8A8A] font-semibold">SELECT BST TARGET NODE:</span>
                <div className="flex items-center gap-1.5">
                  {[12, 38, 62, 90].map((val) => (
                    <button
                      key={val}
                      onClick={() => {
                        soundManager.playStep();
                        setTreeSearchTarget(val);
                        setVisitedTreeNodes([]);
                        setActiveTreeNode(null);
                        setTreeStatusText(`Target set to ${val}. Ready to traverse.`);
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all border cursor-pointer ${
                        treeSearchTarget === val
                          ? "bg-sky-500 text-black font-bold border-sky-400"
                          : "bg-zinc-100 dark:bg-white/[0.04] text-zinc-800 dark:text-zinc-300 border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/30"
                      }`}
                    >
                      Node {val}
                    </button>
                  ))}
                </div>
              </div>

              {/* SVG Tree Canvas */}
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#070707] border border-zinc-200 dark:border-white/[0.08] flex flex-col justify-between min-h-[300px] relative overflow-hidden">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-[#8A8A8A] border-b border-zinc-200 dark:border-white/5 pb-2">
                  <span>BINARY SEARCH TREE GRAPH</span>
                  <span className="text-sky-600 dark:text-sky-400 font-semibold">DEPTH = O(log N)</span>
                </div>

                <svg viewBox="0 0 400 230" className="w-full h-56 my-2">
                  {/* Edges */}
                  {TREE_EDGES.map((edge, idx) => {
                    const fromNode = TREE_NODES[edge.from];
                    const toNode = TREE_NODES[edge.to];
                    const isTraversed = visitedTreeNodes.includes(edge.from) && visitedTreeNodes.includes(edge.to);
                    return (
                      <line
                        key={idx}
                        x1={fromNode.x}
                        y1={fromNode.y}
                        x2={toNode.x}
                        y2={toNode.y}
                        stroke={isTraversed ? "#0284C7" : "rgba(161, 161, 170, 0.4)"}
                        strokeWidth={isTraversed ? "2.5" : "1.5"}
                        strokeDasharray={isTraversed ? "none" : "3,3"}
                        className="transition-all duration-500"
                      />
                    );
                  })}

                  {/* Nodes */}
                  {Object.values(TREE_NODES).map((node) => {
                    const isVisited = visitedTreeNodes.includes(node.id);
                    const isCurrent = activeTreeNode === node.id;
                    const isFound = isVisited && node.val === treeSearchTarget;

                    return (
                      <g key={node.id} className="transition-all duration-300">
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={18}
                          fill={isFound ? "#10B981" : isCurrent ? "#0284C7" : isVisited ? "#38BDF8" : "#E4E4E7"}
                          stroke={isFound ? "#059669" : isCurrent ? "#0369A1" : "rgba(161, 161, 170, 0.6)"}
                          strokeWidth={isCurrent ? "3" : "1.5"}
                        />
                        <text
                          x={node.x}
                          y={node.y + 4}
                          textAnchor="middle"
                          fill={isCurrent || isFound || isVisited ? "#FFFFFF" : "#18181B"}
                          fontSize="11"
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          {node.val}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-800 dark:text-zinc-200 bg-white dark:bg-white/[0.03] p-3 rounded-xl border border-zinc-200 dark:border-white/5">
                  <GitFork size={14} className="text-sky-500 dark:text-sky-400 shrink-0" />
                  <span className="truncate font-medium">{treeStatusText}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={runBstSearch}
                disabled={isRunning}
                className="w-full py-3 rounded-xl bg-zinc-950 dark:bg-sky-500 hover:bg-zinc-800 dark:hover:bg-sky-400 text-white dark:text-black font-bold text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm dark:shadow-[0_0_20px_rgba(56,189,248,0.3)] disabled:opacity-50 cursor-pointer"
              >
                <Play size={15} />
                <span>{isRunning ? "Traversing Tree Nodes..." : `Traverse for Node (${treeSearchTarget})`}</span>
              </button>
            </div>

            {/* Right: Explanation Block */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#090909] border border-zinc-200 dark:border-white/[0.08] flex flex-col gap-3 text-xs font-mono">
                <span className="text-sky-700 dark:text-sky-400 uppercase font-bold tracking-wider">TREE TOPOLOGY INVARIANTS</span>
                <p className="text-zinc-600 dark:text-[#8A8A8A] leading-relaxed">
                  For every node \(X\), all values in left subtree are strictly &lt; X, and all values in right subtree are strictly &gt; X. Search complexity is proportional to tree height: O(h) = O(log N) for balanced BSTs.
                </p>
                <div className="p-3 rounded-xl bg-white dark:bg-black/40 border border-zinc-200 dark:border-white/5 flex flex-col gap-1 text-zinc-800 dark:text-zinc-300 shadow-sm dark:shadow-none">
                  <span className="text-[10px] text-zinc-400 dark:text-[#5A5A5A] font-semibold">PATHWAY RECORD</span>
                  <span>Visited Nodes: [{visitedTreeNodes.map((id) => TREE_NODES[id].val).join(" ➔ ") || "Root"}]</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: BIG-O ASYMPTOTIC COMPLEXITY COMPARISON */}
        {activeTab === "big_o_radar" && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-white/10 pb-4">
              <div className="flex flex-col">
                <span className="text-xs font-mono text-zinc-950 dark:text-[#F5F5F5] font-bold">ASYMPTOTIC TIME COMPLEXITY BENCHMARKS</span>
                <span className="text-[11px] font-mono text-zinc-500 dark:text-[#8A8A8A]">Simulated Operations per Input Size (N)</span>
              </div>

              {/* Scale Slider */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold">N = {inputScale.toLocaleString()} elements</span>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={inputScale}
                  onChange={(e) => setInputScale(Number(e.target.value))}
                  className="w-36 accent-sky-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Complexity Cards Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* O(1) */}
              <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-[#090909] border border-emerald-300 dark:border-emerald-500/30 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400 font-mono">O(1)</span>
                  <span className="text-[9px] font-mono uppercase bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded text-emerald-800 dark:text-emerald-300 font-semibold">Constant</span>
                </div>
                <div className="text-xl font-bold font-mono text-zinc-950 dark:text-white mt-1">1 op</div>
                <p className="text-[11px] text-zinc-600 dark:text-[#8A8A8A]">Hash Table lookup, direct array indexing.</p>
              </div>

              {/* O(log N) */}
              <div className="p-5 rounded-2xl bg-sky-50/50 dark:bg-[#090909] border border-sky-300 dark:border-sky-500/30 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-sky-700 dark:text-sky-400 font-mono">O(log N)</span>
                  <span className="text-[9px] font-mono uppercase bg-sky-100 dark:bg-sky-950/60 px-2 py-0.5 rounded text-sky-800 dark:text-sky-300 font-semibold">Logarithmic</span>
                </div>
                <div className="text-xl font-bold font-mono text-zinc-950 dark:text-white mt-1">
                  {Math.round(Math.log2(inputScale))} ops
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-[#8A8A8A]">Binary Search, Balanced BST traversals.</p>
              </div>

              {/* O(N) */}
              <div className="p-5 rounded-2xl bg-amber-50/50 dark:bg-[#090909] border border-amber-300 dark:border-amber-500/30 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-amber-700 dark:text-amber-400 font-mono">O(N)</span>
                  <span className="text-[9px] font-mono uppercase bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded text-amber-800 dark:text-amber-300 font-semibold">Linear</span>
                </div>
                <div className="text-xl font-bold font-mono text-zinc-950 dark:text-white mt-1">
                  {inputScale.toLocaleString()} ops
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-[#8A8A8A]">Linear scan, single-pass behavioral velocity extraction (PayPilot AI).</p>
              </div>

              {/* O(N log N) */}
              <div className="p-5 rounded-2xl bg-purple-50/50 dark:bg-[#090909] border border-purple-300 dark:border-purple-500/30 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-purple-700 dark:text-purple-400 font-mono">O(N log N)</span>
                  <span className="text-[9px] font-mono uppercase bg-purple-100 dark:bg-purple-950/60 px-2 py-0.5 rounded text-purple-800 dark:text-purple-300 font-semibold">Linearithmic</span>
                </div>
                <div className="text-xl font-bold font-mono text-zinc-950 dark:text-white mt-1">
                  {Math.round(inputScale * Math.log2(inputScale)).toLocaleString()} ops
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-[#8A8A8A]">MergeSort, QuickSort, optimal comparative sorts.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: INTERACTIVE CLI TERMINAL */}
        {activeTab === "terminal" && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/10 pb-3 text-xs font-mono text-zinc-600 dark:text-[#8A8A8A]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-zinc-700 dark:text-zinc-400 font-medium">prateek-shell — v2.4 (x86_64)</span>
              </div>
              <span className="text-[10px] text-zinc-400 dark:text-[#5A5A5A]">Type &apos;help&apos; for commands</span>
            </div>

            {/* Terminal Transcript Area */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 dark:border-white/[0.08] min-h-[300px] max-h-[420px] overflow-y-auto font-mono text-xs flex flex-col gap-3 no-scrollbar">
              <div className="text-zinc-500">
                Type commands like &apos;skills&apos;, &apos;dsa&apos;, &apos;projects&apos;, &apos;education&apos;, or &apos;sudo hire&apos; below.
              </div>

              {terminalHistory.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sky-400">
                    <span className="text-emerald-400">prateek@dev:~$</span>
                    <span className="text-white font-semibold">{item.cmd}</span>
                  </div>
                  <div className="text-[#A1A1AA] pl-4 leading-relaxed whitespace-pre-wrap border-l border-zinc-800">
                    {item.out}
                  </div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Input Bar */}
            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2">
              <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus-within:border-sky-400 transition-colors">
                <span className="text-emerald-400 font-mono text-xs">prateek@dev:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type command (e.g. 'sudo hire', 'dsa', 'skills', 'education')..."
                  className="flex-1 bg-transparent text-white text-xs font-mono focus:outline-none placeholder:text-zinc-600"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-bold text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Execute</span>
                <CornerDownLeft size={13} />
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
