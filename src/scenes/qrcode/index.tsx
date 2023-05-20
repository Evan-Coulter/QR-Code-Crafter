import QRCode from "react-qr-code";
import { ErrorBoundary } from "react-error-boundary";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import * as htmlToImage from 'html-to-image';

type Props = {
    text: string
}

const ErrorFallback = () => {
  return (
    <div>
        That QR code is too long, please reload the page.
    </div>
  )
}

const QRCodeImage = ({text}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const downloadImage = async () => {
    if (ref.current === null) {
      return
    }
    const dataUrl = await htmlToImage.toPng(ref.current, { cacheBust: true, });
    const link = document.createElement('a');
    link.download = "QR_Code.png";
    link.href = dataUrl;
    link.click();
  }

  return (
    <section id='qr-code-image' className="flex justify-between items-center space-y-4 mt-8 flex-col">
        <div className='bg-white p-8 rounded-lg' id="ref" ref={ref}>
            <ErrorBoundary fallback={<ErrorFallback/>}>
              <QRCode value={text} className="w-[180px] h-[180px]"/>
            </ErrorBoundary>
        </div>
        <a className="cursor-pointer p-4" onClick={downloadImage}>
          {<ArrowDownTrayIcon className="h-16 w-16"/>}
        </a>
    </section>
  )
}



export default QRCodeImage