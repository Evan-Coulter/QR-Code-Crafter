type Props = {
  onTextChange: (value: string) => void,
  initialText: string
}

const TextInput = ({onTextChange, initialText}: Props) => {
  return (
    <section id="text-input">
      <input name="qrCodeInput" value={initialText} onChange={e=>{onTextChange(e.target.value)}}/>
    </section>
  )
}

export default TextInput