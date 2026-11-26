import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE_OPEN = "Your lucky numbers are 100, 1, and 0: ";
const FORTUNE_MIDDLE = "your leverage, your margin, ";
const FORTUNE_CLOSE = "and your balance.";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, [FORTUNE_OPEN, FORTUNE_MIDDLE, FORTUNE_CLOSE].join(""), "utf8");
