import { chdir, cwd } from "node:process";
import { join, resolve } from "node:path"; 
import { access } from "node:fs/promises";

export const goUp = () => {
  const currentDir = cwd();
  const parentDir = join(currentDir, "..");

   if (parentDir === currentDir) {
     throw new Error("Cannot go above root");
   }

   chdir(parentDir);
};

export const changeDir = async (path) => {
  const targetDir = resolve(path);
  await access(targetDir);
  chdir(targetDir);
}
