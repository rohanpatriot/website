export interface Tool {
  category: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  external: boolean;
}

export const tools: Tool[] = [
  {
    category: "Engineering",
    title: "Claude Code",
    description:
      "A no-brainer. My go-to tool for productivity, thinking, and building. An agentic coding assistant that lives in the terminal, reads codebases, writes code, runs commands, and ships features end-to-end.",
    tags: ["AI", "Productivity", "CLI"],
    href: "https://claude.ai/referral/YCxOgFPkgQ",
    external: true,
  },
  {
    category: "Engineering",
    title: "v0",
    description:
      "My favorite vibe coding tool. I use v0 for prototyping, exploring visual directions, and building production-ready components I can pull straight into projects.",
    tags: ["Prototyping", "AI", "Components"],
    href: "https://v0.app/ref/JD8AN7",
    external: true,
  },
  {
    category: "Productivity",
    title: "Obsidian",
    description:
      "A long-time Notion user who made the switch. Kepano's file over app philosophy sold me, and AI acceleration has confirmed it even more. Your files outlast every app.",
    tags: ["Notes", "Markdown", "PKM"],
    href: "https://obsidian.md",
    external: true,
  },
  {
    category: "Productivity",
    title: "Basic Memory",
    description:
      "One of the better external memory management platforms I have tried. Both self-hosted or hosted options and plays really well with Obsidian.",
    tags: ["Memory", "AI", "Obsidian"],
    href: "https://basicmemory.com/",
    external: true,
  },
];
