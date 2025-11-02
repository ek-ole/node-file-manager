import { cwd } from 'node:process';
import { CURRENT_DIR, GOODBYE, WELCOME } from "./utils/constants.js";
import { getUsername } from "./cli/args.js";
import { setupPrompt } from "./cli/prompt.js";

const username = getUsername();

console.log(WELCOME(username));
console.log(CURRENT_DIR(cwd()));

const onExit = () => {
  console.log(GOODBYE(username));
  process.exit(0);
}

setupPrompt(username, onExit);
process.on("SIGINT", onExit);