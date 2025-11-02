import { handleUp, handleCd, handleLs } from "../commands/navigation.js";
import {
  handleAdd,
  handleMkdir,
  handleCat,
  handleRn,
  handleRm,
  handleCp,
  handleMv,
  handleHash,
} from "../commands/files.js";
import {
  CD,
  UP,
  LS,
  ADD,
  MKDIR,
  CAT,
  RN,
  RM,
  CP,
  MV,
  HASH,
  INVALID_INPUT,
} from "../utils/constants.js";

const commandHandlers = {
  [UP]: () => handleUp(),
  [LS]: () => handleLs(),
  [CD]: (args) => handleCd(args[0]),
  [ADD]: (args) => handleAdd(args[0]),
  [MKDIR]: (args) => handleMkdir(args[0]),
  [CAT]: (args) => handleCat(args[0]),
  [RN]: (args) =>
    args.length === 2 ? handleRn(args[0], args[1]) : console.log(INVALID_INPUT),
  [RM]: (args) => handleRm(args[0]),
  [CP]: (args) =>
    args.length === 2 ? handleCp(args[0], args[1]) : console.log(INVALID_INPUT),
  [MV]: (args) =>
    args.length === 2 ? handleMv(args[0], args[1]) : console.log(INVALID_INPUT),
  [HASH]: (args) => handleHash(args[0]),
};

export const routeCommand = (input) => {
  for (const [prefix, handler] of Object.entries(commandHandlers)) {
    if (input === prefix || input.startsWith(prefix)) {
      const args = input
        .slice(prefix.length)
        .trim()
        .split(" ")
        .filter((arg) => arg);
      return handler(args);
    }
  }
  return console.log(INVALID_INPUT);
};