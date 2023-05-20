import QRCodeImage from "./scenes/qrcode"
import Navbar from "./scenes/navbar"
import TextInput from "./scenes/textinput"
import AnimatedLine from "./scenes/animated_line"
import { useDeferredValue, useState } from "react"
import FadeInDiv from "./shared/FadeInDiv"
import {Helmet} from "react-helmet";


function App() {
  const initialText = "Hello World!"
  const [inputText, setInputText] = useState<string>(initialText)
  const deferredInputText = useDeferredValue(inputText)
  return (
    <div className='app bg-primaryDark text-primaryLight'>
      <Helmet>
        <meta name="title" content="QR Code Crafter"/>
        <meta name="description" content="Simple QR code generator"/>
        <meta name="keywords" content="QR,QRCODE,QR Code,Generator"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta name="author" content="Evan Coulter"/>
      </Helmet>
      <AnimatedLine animateDelay={0.3} className="fixed top-[0%]"/>
      <FadeInDiv duration={0.5} delay={0.5}><Navbar className="mt-[24px]"/></FadeInDiv>
      <FadeInDiv duration={0.5} delay={0.7}><TextInput onTextChange={setInputText} initialText={inputText}/></FadeInDiv>
      <FadeInDiv duration={0.5} delay={1}><QRCodeImage text={deferredInputText}/></FadeInDiv>
      <AnimatedLine animateDelay={0.4} className="fixed bottom-[0%]"/>
    </div>
  )
}

export default App
