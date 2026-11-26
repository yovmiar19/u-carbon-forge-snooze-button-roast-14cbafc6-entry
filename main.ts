import { mkdirSync, writeFileSync } from "node:fs";

// Snooze Button Roast — one line roasting an alarm clock that rings at 6 AM on a Saturday (DeepSeek #5 pick, 141 chars, gate 1-200).
const LINE =
  'At 6 AM on Saturday, my alarm clock screams like it caught me cheating, then plays innocent when I unplug it and whisper, "Not today, Satan."';

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function main(): void {
  // Gate: the entry must be a single line of 1-200 characters.
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`line must be 1-200 chars, got ${LINE.length}`);
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, LINE, "utf8");
}

main();
