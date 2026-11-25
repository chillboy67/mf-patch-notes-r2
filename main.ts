// mf-patch-notes-r2 — real-life patch notes, version 1.0.3.
// One changelog line, shipped the same way every release ships: to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const notes = [
  "v1.0.3: fixed a bug where sneezing twice in a row caused the user to forget why they walked into the room.",
];

const line = notes.join("\n");
// A changelog with one entry: no breaking changes, just the sneeze fix.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
