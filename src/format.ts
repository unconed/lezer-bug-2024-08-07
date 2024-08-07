import { SyntaxNode } from '@lezer/common';

// AST node to tree view + side-by-side tokens
export const formatAST = (node: SyntaxNode, code?: string, depth: number = 0) => {
  const {type} = node;
  const prefix = '  '.repeat(depth);

  let child = node.firstChild;

  const text = code != null ? code.slice(node.from, node.to).replace(/\n/g, "⮐ ") : '';
  const out = [] as string[];

  let line = `${prefix}${type.name}`;
  const n = line.length;
  line += ' '.repeat(60 - n);
  line += text;
  out.push(line);

  while (child) {
    out.push(formatAST(child, code, depth + 1));
    child = child.nextSibling;
  }
  return out.join("\n");
}