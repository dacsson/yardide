import { PreviewInfo } from "./PreviewInfo"

export const Preview = () =>
{
  return(
    <div className="m_file_area">
      <PreviewInfo />
      <div className="m_preview">
        <iframe id='preview-box'>

        </iframe>
      </div>
    </div>
  )
}