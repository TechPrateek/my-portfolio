export interface Achievement {
  id: string;
  metric: string;
  unit?: string;
  title: string;
  detail: string;
  category: "Algorithms" | "Academics" | "Architecture";
  highlight?: boolean;
}

export const achievements: Achievement[] = [
  {
    id: "dsa-350",
    metric: "350",
    unit: "+",
    title: "Algorithmic Problems Solved",
    detail: "Spanning LeetCode, Codolio, GeeksforGeeks, and competitive contest archives with focus on optimal time-complexity.",
    category: "Algorithms",
    highlight: true,
  },
  {
    id: "leetcode-rating",
    metric: "1548",
    unit: "",
    title: "Max LeetCode Contest Rating",
    detail: "Demonstrated speed, mathematical precision, and edge-case handling under live timed competitive environments.",
    category: "Algorithms",
    highlight: true,
  },
  {
    id: "leetcode-190",
    metric: "190",
    unit: "+",
    title: "LeetCode Questions Mastered",
    detail: "Consistently tackling Medium & Hard patterns in arrays, trees, sliding windows, DP, and graphs.",
    category: "Algorithms",
    highlight: false,
  },
  {
    id: "btech-cs",
    metric: "2024–28",
    unit: "B.Tech",
    title: "Galgotias College of Eng. & Tech.",
    detail: "Computer Science & Engineering undergraduate focusing on Data Structures, Algorithms, OS, and DBMS.",
    category: "Academics",
    highlight: false,
  },
];
