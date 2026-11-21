// The poem about two agents agreeing — a short poem about agency:
// the power to choose and to act, and what passes between two agents
// when they agree on one plan. Writes the single chosen poem to
// <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output/entry.txt).
// Node 22, no dependencies. Deterministic: the same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem, chosen from four candidates against the judge's criteria:
// on the subject of agency first, then feeling, insight, craft, freshness.
const POEM = `I held the wheel till my knuckles whitened,
afraid to let the road go.
You said: watch the left, I'll watch the right —
we turn it together.
The wheel did not grow lighter.
It grew honest.
Power was never the grip.
It was knowing whose hands to trust —
and when to take it back.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM + "\n", "utf8");
