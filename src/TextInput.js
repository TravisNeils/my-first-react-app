import {useState} from 'react'
function TextInput(props) {
  const [text, setText] = useState('')
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }
  function sendMessage(){
    props.send(text)
    setText('')
  }
  return <footer className="text-input">
    <input 
      placeholder="Write your message"
      value={text}
      onChange={e=> setText(e.target.value)}
      onKeyDown={handleKeyDown}
    />
    <button onClick={sendMessage}>
    </button>
  </footer>
}
export default TextInput
