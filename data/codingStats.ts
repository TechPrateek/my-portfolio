export interface MetricStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  description: string;
}

export interface PlatformProfile {
  name: string;
  handle: string;
  url: string;
  badge: string;
  stats: string;
  category: "Primary" | "Competitive" | "Practice" | "Professional";
  iconName: "LeetCode" | "Codolio" | "GitHub" | "LinkedIn" | "Codeforces" | "CodeChef" | "Terminal";
}

export const primaryStats: MetricStat[] = [
  {
    id: "total-solved",
    value: 350,
    suffix: "+",
    label: "CODING PROBLEMS SOLVED",
    sublabel: "Across Algorithmic Platforms",
    description: "Deep problem solving spanning arrays, trees, dynamic programming, graphs, and system design.",
  },
  {
    id: "leetcode-solved",
    value: 190,
    suffix: "+",
    label: "LEETCODE PROBLEMS",
    sublabel: "Mastered Data Structures",
    description: "Consistent practice solving medium and hard algorithmic challenges with optimal time/space complexity.",
  },
  {
    id: "max-rating",
    value: 1548,
    suffix: "",
    label: "MAX LEETCODE CONTEST RATING",
    sublabel: "Top Competitive Performance",
    description: "Demonstrated speed and accuracy under timed bi-weekly and weekly contest pressure.",
  },
];

export const platformProfiles: PlatformProfile[] = [
  {
    name: "LeetCode",
    handle: "@TechPrateek",
    url: "https://leetcode.com/u/TechPrateek",
    badge: "1548 Peak Rating",
    stats: "190+ Problems Solved",
    category: "Primary",
    iconName: "LeetCode",
  },
  {
    name: "LinkedIn",
    handle: "Prateek Yadav",
    url: "https://www.linkedin.com/in/prateekyadav360/",
    badge: "B.Tech Computer Science",
    stats: "Professional Network",
    category: "Professional",
    iconName: "LinkedIn",
  },
  {
    name: "GitHub",
    handle: "@TechPrateek",
    url: "https://github.com/TechPrateek",
    badge: "Open Source Repos",
    stats: "Projects & Production Code",
    category: "Professional",
    iconName: "GitHub",
  },
  {
    name: "Codolio",
    handle: "@MasterPrateek",
    url: "https://codolio.com/profile/MasterPrateek",
    badge: "Aggregated Portfolio",
    stats: "350+ Global Submissions",
    category: "Primary",
    iconName: "Codolio",
  },
  {
    name: "GeeksforGeeks",
    handle: "prateek_yadav",
    url: "https://auth.geeksforgeeks.org/user/prateek_yadav",
    badge: "Core CS & DSA",
    stats: "Data Structures & Practice",
    category: "Practice",
    iconName: "Terminal",
  },
  {
    name: "CodeChef / Codeforces",
    handle: "Contest Participant",
    url: "https://www.codechef.com",
    badge: "Speed & Accuracy",
    stats: "Algorithmic Challenges",
    category: "Competitive",
    iconName: "CodeChef",
  },
  {
    name: "Coding Ninjas",
    handle: "Problem Solver",
    url: "https://www.naukri.com/code360",
    badge: "Guided Mastery",
    stats: "Curated Problem Sets",
    category: "Practice",
    iconName: "Terminal",
  },
];
