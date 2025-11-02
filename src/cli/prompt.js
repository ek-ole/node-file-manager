import { handleCd, handleUp, handleLs } from "../commands/navigation.js";
import { CD, CURRENT_DIR, EXIT, INVALID_INPUT, UP, LS } from "../utils/constants.js";
import { cwd } from "node:process";

export const setupPrompt = (onExit) => {
  process.stdout.write('>');
  
  process.stdin.on('data', async (data) => {
    const input = data.toString().trim()

    if (input === EXIT) {
      onExit();
      return;
    } 
    
    if (input === UP) {
      handleUp();
    } else if (input.startsWith(CD)) {
      const path = input.slice(CD.length).trim();
      await handleCd(path);
    } else if (input === LS) {
      await handleLs();
    } else {
      console.log(INVALID_INPUT);
    }
  
    console.log(CURRENT_DIR(cwd()));  
    process.stdout.write(">");
  })
}
