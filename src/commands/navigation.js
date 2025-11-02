import { goUp } from "../utils/paths.js";

export const handleUp = () => {
  try {
    return goUp();
  } catch (error) { 
    console.log("Operation failed");
    return false;
  }    
};