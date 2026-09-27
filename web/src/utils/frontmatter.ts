export interface FrontmatterData {
  title?: string;
  summary?: string;
  description?: string;
  lastUpdated?: string;
  readTime?: string;
  author?: string;
  license?: string;
  [key: string]: any;
}

export interface ParsedMarkdown {
  data: FrontmatterData;
  content: string;
}

/**
 * Robust zero-dependency frontmatter parser.
 * Extracts YAML-like key-value pairs from between the opening and closing --- fences,
 * and returns the remaining clean markdown body.
 */
export function parseFrontmatter(raw: string): ParsedMarkdown {
  if (!raw) return { data: {}, content: '' };
  const normalized = raw.replace(/\r\n/g, '\n');
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n*([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: normalized };
  }

  const yamlStr = match[1];
  const bodyContent = match[2];
  const data: FrontmatterData = {};

  const lines = yamlStr.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const colonIdx = trimmed.indexOf(':');
    if (colonIdx > 0) {
      const key = trimmed.slice(0, colonIdx).trim();
      let val = trimmed.slice(colonIdx + 1).trim();

      // Strip surrounding matching double or single quotes
      if (
        (val.startsWith('"') && val.endsWith('"') && val.length >= 2) ||
        (val.startsWith("'") && val.endsWith("'") && val.length >= 2)
      ) {
        val = val.slice(1, -1);
      }

      data[key] = val;
    }
  }

  // Alias description to summary if summary is omitted
  if (!data.summary && data.description) {
    data.summary = data.description;
  }

  return { data, content: bodyContent };
}
