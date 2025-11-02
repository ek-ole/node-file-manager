import { OPERATION_FAILED } from "../utils/constants.js";
import { changeDir, goUp } from "../utils/paths.js";

export const handleUp = () => {
  try {
    return goUp();
  } catch (error) { 
    console.log("Operation failed");
    return false;
  }    
};

export const handleCd = async (path) => {
  try {
    await changeDir(path); 
    return true;
  } catch (error) {
    console.log(OPERATION_FAILED);
    return false;
  }
};