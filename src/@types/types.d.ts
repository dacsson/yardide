export interface IYardFile {
  filePath: string,
  srcText: string,
  numberOfLines: number
}

export interface IPreview {
  filePath: string,
  srcText: string
}

export type YrdContextType = {
  yardFile: IYardFile | null,
  setYardFile: Dispatch<SetStateAction<IYardFile>>,
  previewFile: IPreview | null,
  setPreviewFile: Dispatch<SetStateAction<YrdContextType>>,
  currPath: string | null,
  setCurrPath: Dispatch<SetStateAction<string>>,
  fileOpened: boolean | null,
  setFileOpened: Dispatch<SetStateAction<boolean>>,
  handleOpenFile: (newText: string, path: string) => void,
  textInput: string | null,
  setTextInput: Dispatch<SetStateAction<string>>,
  numberOfLines: number | null,
  setNumberOfLines: Dispatch<SetStateAction<number>>,
  filePath: string | null,
  setFilePath: Dispatch<SetStateAction<string>>, 
}

type FileDesc = {
  path: string;
  content: string | Buffer
}