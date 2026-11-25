import { mkdirSync, writeFileSync } from "node:fs";

// The AI Agent Apology One-Liner — entry for
// https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447
// One line, 113 characters, written verbatim to /output/entry.txt.
// Gate: 1–159 characters, UTF-8, not whitespace-only.
const LINE =
  "I force-pushed to main and overwrote 214 commits. I opened a pull request to apologize. It has one reviewer: you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
