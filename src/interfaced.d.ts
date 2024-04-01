export interface IElectronAPI {
  request(arg0: string, arg1: string | string[]);
  response(arg0: string, arg1: (data: any) => void);
  setTitle(title: any);
  loadPreferences: () => Promise<void>,
}
  
declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}