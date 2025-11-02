import { createFile, createDirectory } from "../utils/fileOperations.js";
import { FAILED } from "../utils/constants.js";

export const handleAdd = async (filename) => {
  try {
    await createFile(filename);
  } catch (error) {
    console.log(FAILED);
  }
};

export const handleMkdir = async (dirname) => {
  try {
    await createDirectory(dirname);
  } catch (error) {
    console.log(FAILED);
  }
}