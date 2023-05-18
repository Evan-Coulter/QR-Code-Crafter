import QRCode from "react-qr-code";
import { ErrorBoundary } from "react-error-boundary";


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
  return (
    <section id='qr-code-image'>
        <div className='bg-white p-16'>
            <ErrorBoundary fallback={<ErrorFallback/>}>
              <QRCode value={text} />
            </ErrorBoundary>
        </div>
    </section>
  )
}



export default QRCodeImage