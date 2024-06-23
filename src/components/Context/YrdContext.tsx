import { createContext } from "react";
import { YrdContextType } from "../../@types/types";

export const YrdContext = createContext<YrdContextType>({
  yardFile: null,
  setYardFile: () => {},
  previewFile: null,
  setPreviewFile: () => {},
  currPath: null,
  setCurrPath: () => {}
});