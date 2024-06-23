import { FaRegFloppyDisk } from "react-icons/fa6";
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";

export const PreviewInfo = () =>
{
  const blobToFile = (theBlob: Blob, fileName:string): File => {
    const b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;
      
    //Cast to a File() type
    return theBlob as File;
  }

  const handleSavePreview = () =>
  {
    var frame : HTMLElement = document.getElementById('preview-box');
    window.electronAPI.request("exportPdf", frame.contentDocument.body.innerHTML);
    // var pdfDoc = new jsPDF('p', 'pt', 'letter');
    // var options = {
    //   background: '#fff' //background is transparent if you don't set it, which turns it black for some reason.
    // };
    // // pdfDoc.addHTML($('#content')[0], options, function () {
    // //   pdfDOc.save('Test.pdf');
    // // });
    // var w = frame.offsetWidth;
    // var h = frame.offsetHeight;
    // html2canvas(frame.contentDocument.documentElement, { scale: 3, height: h, width: w }).then(canvas => {
    //   // console.log("canvas :", canvas.textContent, canvas);
    //   var img = canvas.toBlob((blob) => {
    //     var file = blobToFile(blob, "")
    //     window.electronAPI.request("exportPdf", file.);
    //   });
    //   // doc.html(canvas.innerHTML , {
    //   //   async callback(doc) {
    //   //     window.electronAPI.request("exportPdf", doc.output());
    //   //   }
    //   // })  
    // });
  }

  return(
    <div className="m_preview_info">
      <a>
        Предпросмотр
      </a>
      <button onClick={() => handleSavePreview()}>
        <FaRegFloppyDisk size={"16px"}/>
      </button>
    </div>
  )
}