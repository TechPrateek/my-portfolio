export interface TimelineItem {
  year: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  type: "Education" | "Engineering" | "Competitive" | "Focus";
}

export const journeyTimeline: TimelineItem[] = [
  {
    year: "2024 – 2028",
    period: "Undergraduate Program",
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Galgotias College of Engineering and Technology",
    description:
      "Pursuing Bachelor of Technology in Computer Science & Engineering at Galgotias College of Engineering and Technology. Concentrating on Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Software Design, and modern Full-Stack Engineering.",
    tags: [
      "Galgotias College of Engineering and Technology",
      "B.Tech CSE",
      "2024 – 2028",
      "Algorithms",
      "Systems Engineering",
      "DBMS",
    ],
    type: "Education",
  },
];
