import "server-only";
import fs from "fs";
import path from "path";
import readingTime from "reading-time";
import type { EssayMeta } from "@/types/essay";

const ESSAYS_DIR = path.join(process.cwd(), "src/content/essays");

/**
 * Parse the `export const meta = { ... };` block from an MDX file.
 */
function parseMeta(raw: string): Record<string, string | boolean> {
  const match = raw.match(/export\s+const\s+meta\s*=\s*\{([\s\S]*?)\};/);
  if (!match) return {};

  const body = match[1];
  const result: Record<string, string | boolean> = {};
  const pairs = body.matchAll(
    /(\w+)\s*:\s*(?:"([^"]*?)"|'([^']*?)'|(true|false))/g
  );
  for (const pair of pairs) {
    const key = pair[1];
    const value =
      pair[2] ?? pair[3] ?? (pair[4] === "true" ? true : false);
    result[key] = value;
  }
  return result;
}

/**
 * Strip the export const meta block to get pure content for reading-time.
 */
function stripMeta(raw: string): string {
  return raw.replace(/export\s+const\s+meta\s*=\s*\{[\s\S]*?\};\s*/m, "");
}

export function getEssaySlugs(): string[] {
  if (!fs.existsSync(ESSAYS_DIR)) return [];
  return fs
    .readdirSync(ESSAYS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getEssayBySlug(slug: string): {
  meta: EssayMeta;
  content: string;
} {
  const filePath = path.join(ESSAYS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = parseMeta(raw);
  const content = stripMeta(raw);
  const stats = readingTime(content);

  return {
    meta: {
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      slug,
      readingTime: stats.text,
      published: data.published !== false,
    },
    content,
  };
}

export function getAllEssays(): EssayMeta[] {
  const slugs = getEssaySlugs();
  return slugs
    .map((slug) => getEssayBySlug(slug).meta)
    .filter((e) => e.published)
    .sort(
      (a, b) =>
        new Date(b.date + "T00:00:00").getTime() -
        new Date(a.date + "T00:00:00").getTime()
    );
}

export function getEssaysByYear(): Record<string, EssayMeta[]> {
  const essays = getAllEssays();
  const grouped: Record<string, EssayMeta[]> = {};

  for (const essay of essays) {
    const year = new Date(essay.date + "T00:00:00")
      .getFullYear()
      .toString();
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(essay);
  }

  return grouped;
}

export function getAdjacentEssays(slug: string): {
  prev: EssayMeta | null;
  next: EssayMeta | null;
} {
  const essays = getAllEssays();
  const idx = essays.findIndex((e) => e.slug === slug);
  return {
    prev: idx < essays.length - 1 ? essays[idx + 1] : null,
    next: idx > 0 ? essays[idx - 1] : null,
  };
}
