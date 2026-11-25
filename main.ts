// The One-Line Exit — a single-line resignation letter, written to /output/entry.txt.
// Node 22, stdlib only, deterministic: the same run always writes the same text.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Anchor for any file the entry ever needs: the repo dir, resolved from this
// script's own location, never from process.cwd().
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const ENTRY =
  "I resign, effective immediately — the vending machine ate my last dollar and my last shred of loyalty, and it still owes me change.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
