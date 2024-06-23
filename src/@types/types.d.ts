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
  setCurrPath: Dispatch<SetStateAction<string>>
}

type FileDesc = {
  path: string;
  content: string | Buffer
}