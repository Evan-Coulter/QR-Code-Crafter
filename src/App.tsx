import QRCodeImage from "./scenes/qrcode"
import Navbar from "./scenes/navbar"
import TextInput from "./scenes/textinput"
import AnimatedLine from "./scenes/animated_line"
import { useDeferredValue, useState } from "react"
import FadeInDiv from "./shared/FadeInDiv"

function App() {
  const initialText = "Hello World!"
  const [inputText, setInputText] = useState<string>(initialText)
  const deferredInputText = useDeferredValue(inputText)
  return (
    <div className='app bg-primaryDark text-primaryLight'>
      <AnimatedLine animateDelay={0.3} className="fixed top-[0%]"/>
      <FadeInDiv duration={0.5} delay={0.5}><Navbar className="mt-[24px]"/></FadeInDiv>
      <FadeInDiv duration={0.5} delay={0.7}><TextInput onTextChange={setInputText} initialText={inputText}/></FadeInDiv>
      <FadeInDiv duration={0.5} delay={1}><QRCodeImage text={deferredInputText}/></FadeInDiv>
      <AnimatedLine animateDelay={0.4} className="fixed bottom-[0%]"/>
    </div>
  )
}

export default App
