import { handleUp } from "../commands/navigation.js";
import { CURRENT_DIR, EXIT, INVALID_INPUT, UP } from "../utils/constants.js";
import { cwd } from "node:process";

export const setupPrompt = (username, onExit) => {
  process.stdout.write('>');
  
  process.stdin.on('data', (data) => {
    const input = data.toString().trim()

    if (input === EXIT) {
      onExit();
      return;
    } 
    
    if (input === UP) {
      handleUp();
    } else {
      console.log(INVALID_INPUT);
    }
  
    console.log(CURRENT_DIR(cwd()));  
    process.stdout.write(">");
  })
}
