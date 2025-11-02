import {
  createFile,
  createDirectory,
  readFile,
  renameFile,
  removeFile,
  copyFile,
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
};

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
};

export const handleRm = async (filepath) => {
  try {
    await removeFile(filepath);
  } catch (error) {
     console.log(FAILED);
  }
};

export const handleCp = async (sourcePath, targetDir) => {
  try {
    await copyFile(sourcePath, targetDir);
  } catch (error) {
     console.log(FAILED);
  }
};

const handleMv = async (sourcePath, targetDir) => {
  try {
    await copyFile(sourcePath, targetDir);
    await removeFile(sourcePath);
  } catch (error) {
    console.log(FAILED);
  }
}