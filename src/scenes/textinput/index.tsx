type Props = {
  onTextChange: (value: string) => void,
  initialText: string
}

const TextInput = ({onTextChange, initialText}: Props) => {
  return (
    <section id="text-input" className="max-w-[70%] h-[200px] flex mx-auto mt-8"> 
      <textarea 
        rows={1}
        name="qrCodeInput" 
        value={initialText} 
        onChange={e=>{onTextChange(e.target.value)}}
        className="m-auto resize-none h-full w-full shadow appearance-none border-[2px] border-secondary rounded-[8px] bg-transparent py-4 px-5 text-offWhite text-xl leading-tight focus:outline-none focus:shadow-outline focus:border-secondaryLight"/>
    </section>
  )
}

export default TextInput