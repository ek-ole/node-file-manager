import {
  handleAdd,
  handleMkdir,
  handleCat,
  handleRn,
} from "../commands/files.js";
import { handleCd, handleUp, handleLs } from "../commands/navigation.js";
import { CD, CURRENT_DIR, EXIT, INVALID_INPUT, UP, LS, ADD, MKDIR, CAT, RN } from "../utils/constants.js";
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
