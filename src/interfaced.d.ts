export interface IElectronAPI {
  setTitle(title: any);
  loadPreferences: () => Promise<void>,
}
  
declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}