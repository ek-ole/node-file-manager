import {
  createFile,
  createDirectory,
  readFile,
  renameFile,
} from "../utils/fileOperations.js";
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

export const handleCat = async (filepath) => {
  try {
    await readFile(filepath);
    console.log('');
  } catch (error) {
    console.log(FAILED);
  }
};

export const handleRn = async (oldPath, newName) => {
  try {
    await renameFile(oldPath, newName);
  } catch (error) {
    console.log(FAILED);
  }
}