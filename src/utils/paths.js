import { chdir, cwd } from "node:process";
import { join } from "node:path";

export const goUp = () => {
  const currentDir = cwd();
  const parentDir = join(currentDir, "..");

  if (parentDir !== currentDir) {
    chdir(parentDir);
    return true;
  }
  return false;
};
