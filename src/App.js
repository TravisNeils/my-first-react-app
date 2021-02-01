import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TextInput from './TextInput';
function addmessage(messages1, text){
  messages1.push({text:text});
  return messages1;
}

function App() {
  let [messages, setMessages] = useState([{ text: 'hello' }])
  console.log(messages)
  let message_text = messages.map((message) => message.text)
  console.log(message_text)
  let listItems = messages.map((message) => 
      <li>{message.text}</li>
      );
  return (
    <div className="App">
      <header className="App-header">
        <div className='icon'></div>
        <div>PLATTER</div>
      </header>
      <div className="messagebox">
        <p className='subtext'>Try adding more messages it works!</p>
        <ul className="messages">
          <li>
            Hello my friend
          </li>
          <li>
            Hello to you too
          </li>
          {messages.map((message) => 
      <li>{message.text}</li>)}
        </ul>
        {/* {messages[0].text} */}
      </div>
      <TextInput
        send={(t) => setMessages([...messages, {text: t}])}
      />
      <div>

      </div>
    </div>
  );
}

export default App;
