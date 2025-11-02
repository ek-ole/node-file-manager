import { writeFile, mkdir } from "node:fs/promises";

export const createFile = async (filename) => {
  await writeFile(filename, '')
};

export const createDirectory = async (dirname) => {
  await mkdir(dirname);
}