import QRCodeImage from "./scenes/qrcode"
import Navbar from "./scenes/navbar"
import TextInput from "./scenes/textinput"
import { useDeferredValue, useState } from "react"

function App() {
  const pageBorderStyle = "w-full bg-primaryLight h-[24px] fixed"
  const initialText = "Hello World!"
  const [inputText, setInputText] = useState<string>(initialText)
  const deferredInputText = useDeferredValue(inputText)
  return (
    <div className='app bg-primaryDark text-primaryLight'>
      <div className={`${pageBorderStyle} top-[0%]`}></div>
      <Navbar className="mt-[24px]"/>
      <TextInput onTextChange={setInputText} initialText={inputText}/>
      <QRCodeImage text={deferredInputText}/>
      <div className={`${pageBorderStyle} bottom-[0%]`}></div>
    </div>
  )
}

export default App
