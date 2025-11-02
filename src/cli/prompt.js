import {
  handleAdd,
  handleMkdir,
  handleCat,
  handleRn,
} from "../commands/files.js";
import { handleCd, handleUp, handleLs } from "../commands/navigation.js";
import { CD, CURRENT_DIR, EXIT, INVALID_INPUT, UP, LS, ADD, MKDIR, CAT, RN } from "../utils/constants.js";
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
    } else if (input.startsWith(ADD)) {
      const filename = input.slice(ADD.length).trim();
      await handleAdd(filename);
    } else if (input.startsWith(MKDIR)) {
      const dirname = input.slice(MKDIR.length).trim();
      await handleMkdir(dirname);
    } else if (input.startsWith(CAT)) {
      const filepath = input.slice(CAT.length).trim();
      await handleCat(filepath);
    } else if (input.startsWith(RN)) {
      const args = input.slice(RN.length).trim().split(' ');   
      if (args.length === 2) {
        await handleRn(args[0], args[1]);
      } else {
        console.log(INVALID_INPUT);
      }   
    } else {
      console.log(INVALID_INPUT);
    }
  
    console.log(CURRENT_DIR(cwd()));  
    process.stdout.write(">");
  })
}
