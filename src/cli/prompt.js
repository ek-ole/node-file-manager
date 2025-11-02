import { CURRENT_DIR, EXIT } from "../utils/constants.js";
import { cwd } from "node:process";
import { routeCommand } from "./commandRouter.js";

export const setupPrompt = (onExit) => {
  process.stdout.write('>');
  
  process.stdin.on('data', async (data) => {
    const input = data.toString().trim()

    if (input === EXIT) {
      onExit();
      return;
    } 

    await routeCommand(input);
      
    console.log(CURRENT_DIR(cwd()));  
    process.stdout.write(">");
  })
}
