// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TextInput from './TextInput';
import NamePicker from './NamePicker';


function App() {
  let [messages, setMessages] = useState([{ text: 'hello', name:"computer" }])
  const [name, setName] = useState(localStorage.getItem('username') || '') 
  // console.log(messages)
  // let message_text = messages.map((message) => message.text)
  // console.log(message_text)
  return (
    <div className="App">
      <header className="App-header">
        <div className='icon'></div>
        <div className='title'>PLATTER</div>
        <NamePicker
          send={(t) => setName(t)}
        />
      </header>
      <div className="messagebox">
        <div className="messages">
            {messages.map((message, i) => 
          <div key={i} className='message this'>
            <div className='messageText'>{message.text}</div> 
            <div className='username'>{message.name}</div>
          </div>
          )}
        </div>
        {/* {messages[0].text} */}
      </div>
      <TextInput
        send={(t) => setMessages([ ...messages, {text: t, name:name}])}
      />
      <div>

      </div>
    </div>
  );
}

export default App;
