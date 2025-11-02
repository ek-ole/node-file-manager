import { FAILED } from "../utils/constants.js";
import { getDirectoryList } from "../utils/files.js";
import { changeDir, goUp } from "../utils/paths.js";

export const handleUp = () => {
  try {
    return goUp();
  } catch (error) { 
    console.log(FAILED);
    return false;
  }    
};

export const handleCd = async (path) => {
  try {
    await changeDir(path); 
    return true;
  } catch (error) {
    console.log(FAILED);
    return false;
  }
};

export const handleLs = async () => {
  try {
    const items = await getDirectoryList();

    console.log("Name\t\tType");
    console.log("-------------------------");
    items.forEach((item) => {
      const type = item.isDirectory ? "directory" : "file";
      console.log(`${item.name}\t\t${type}`);
    });
  } catch (error) {
    console.log(FAILED);
  }
};