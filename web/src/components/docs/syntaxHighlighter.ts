/**
 * Zero-dependency, high-performance syntax highlighter for Stokes documentation.
 * Tailored for Rust, Python, SQL, Protobuf, TypeScript, Shell, YAML, and JSON.
 */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const RUST_KEYWORDS = new Set([
  'as', 'async', 'await', 'break', 'const', 'continue', 'crate', 'dyn', 'else', 'enum',
  'extern', 'false', 'fn', 'for', 'if', 'impl', 'in', 'let', 'loop', 'match', 'mod',
  'move', 'mut', 'pub', 'ref', 'return', 'self', 'Self', 'static', 'struct', 'super',
  'trait', 'true', 'type', 'unsafe', 'use', 'where', 'while', 'Ok', 'Err', 'Some', 'None'
]);

const PYTHON_KEYWORDS = new Set([
  'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del',
  'elif', 'else', 'except', 'False', 'finally', 'for', 'from', 'global', 'if', 'import',
  'in', 'is', 'lambda', 'None', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return',
  'True', 'try', 'while', 'with', 'yield'
]);

const SQL_KEYWORDS = new Set([
  'select', 'from', 'where', 'insert', 'into', 'values', 'update', 'set',
  'delete', 'create', 'table', 'drop', 'alter', 'add', 'column', 'primary',
  'key', 'foreign', 'references', 'index', 'unique', 'distinct', 'join',
  'left', 'right', 'inner', 'outer', 'on', 'group', 'by', 'order', 'having',
  'limit', 'offset', 'and', 'or', 'not', 'in', 'is', 'null', 'like', 'as',
  'engine', 'replacingmergetree', 'order', 'partition', 'uint32', 'string', 'datetime'
]);

const TS_KEYWORDS = new Set([
  'import', 'export', 'default', 'from', 'as', 'const', 'let', 'var',
  'function', 'class', 'interface', 'type', 'enum', 'extends', 'implements',
  'public', 'private', 'protected', 'readonly', 'static', 'override',
  'async', 'await', 'return', 'yield', 'new', 'this', 'super',
  'if', 'else', 'switch', 'case', 'break', 'continue',
  'for', 'while', 'do', 'in', 'of', 'try', 'catch', 'finally', 'throw',
  'typeof', 'instanceof', 'void', 'delete', 'true', 'false', 'null', 'undefined'
]);

export function highlightCode(code: string, lang = 'text'): string {
  const language = (lang || 'text').toLowerCase().trim();

  if (language === 'text' || language === 'plain' || language === 'ansi') {
    return escapeHtml(code);
  }

  const tokenRegex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|#(?![\w-]|[\da-fA-F]{3,8})[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|<\/?[A-Za-z0-9_.-]+|\/?=>|===|!==|==|!=|<=|>=|\+\+|--|::|->|&{1,2}|\|{1,2}|[a-zA-Z_$][a-zA-Z0-9_$]*|\b\d+(?:\.\d+)?\b|[^\s\w]|\s+)/g;

  let html = '';
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(code)) !== null) {
    const token = match[0];

    // 1. Comments
    if (token.startsWith('//') || token.startsWith('/*') || (token.startsWith('#') && (language === 'python' || language === 'py' || language === 'shell' || language === 'bash' || language === 'sh' || language === 'yaml' || language === 'yml' || language === 'toml'))) {
      html += `<span class="text-[#8b949e] italic">${escapeHtml(token)}</span>`;
      continue;
    }

    // 2. String Literals
    if (
      (token.startsWith('"') && token.endsWith('"')) ||
      (token.startsWith("'") && token.endsWith("'")) ||
      (token.startsWith('`') && token.endsWith('`'))
    ) {
      const rest = code.slice(tokenRegex.lastIndex);
      if (/^\s*:/.test(rest)) {
        html += `<span class="text-[#79c0ff]">${escapeHtml(token)}</span>`;
        continue;
      }
      html += `<span class="text-[#7ee787]">${escapeHtml(token)}</span>`;
      continue;
    }

    // 3. Numbers
    if (/^\d+(?:\.\d+)?$/.test(token)) {
      html += `<span class="text-[#ffa657]">${escapeHtml(token)}</span>`;
      continue;
    }

    // 4. Booleans / Null / None
    if (token === 'true' || token === 'false' || token === 'True' || token === 'False') {
      html += `<span class="text-[#ff7b72] font-medium">${escapeHtml(token)}</span>`;
      continue;
    }
    if (token === 'null' || token === 'None' || token === 'undefined' || token === 'nil') {
      html += `<span class="text-[#ff7b72]">${escapeHtml(token)}</span>`;
      continue;
    }

    // 5. Language Keywords
    if (
      (language === 'rust' || language === 'rs') && RUST_KEYWORDS.has(token)
    ) {
      html += `<span class="text-[#ff7b72] font-medium">${escapeHtml(token)}</span>`;
      continue;
    }

    if (
      (language === 'python' || language === 'py') && PYTHON_KEYWORDS.has(token)
    ) {
      html += `<span class="text-[#ff7b72] font-medium">${escapeHtml(token)}</span>`;
      continue;
    }

    if (
      (language === 'sql' || language === 'clickhouse') && SQL_KEYWORDS.has(token.toLowerCase())
    ) {
      html += `<span class="text-[#d2a8ff] font-medium">${escapeHtml(token)}</span>`;
      continue;
    }

    if (
      (language === 'typescript' || language === 'ts' || language === 'javascript' || language === 'js') && TS_KEYWORDS.has(token)
    ) {
      html += `<span class="text-[#ff7b72] font-medium">${escapeHtml(token)}</span>`;
      continue;
    }

    // 6. Types / Uppercase Identifiers
    if (/^[A-Z][a-zA-Z0-9_]*$/.test(token)) {
      html += `<span class="text-[#79c0ff]">${escapeHtml(token)}</span>`;
      continue;
    }

    // 7. CLI / Shell commands in bash/sh
    if ((language === 'bash' || language === 'sh' || language === 'shell') && /^(stokes|curl|cargo|git|python|pip|npm|docker|cat|grep|echo)$/.test(token)) {
      html += `<span class="text-[#79c0ff] font-medium">${escapeHtml(token)}</span>`;
      continue;
    }

    // 8. Operators
    if (/^(::|->|=>|===|!==|==|!=|<=|>=|&&|\|\|)$/.test(token)) {
      html += `<span class="text-[#ff7b72]">${escapeHtml(token)}</span>`;
      continue;
    }

    // Plain text / punctuation
    html += escapeHtml(token);
  }

  return html;
}
