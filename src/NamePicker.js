import {useState} from 'react'
function NamePicker(props) {
  const [username, setUsername] = useState(localStorage.getItem('username') || '')
  const [editName, setEditName] = useState(false)
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setName();
    }
  }
  // console.log(editName)
  function setName(){
    props.send(username)
    // console.log("set_name " + editName)
    setEditName(false)
    localStorage.setItem('username', username)
  }
  if (editName){
    return <div className="name-input">
      <input 
        placeholder="Display Name"
        // value={text}
        onChange={e=> setUsername(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={setName}>
        OK
      </button>
    </div>
  }
    return <div className="name-input">{username}<button onClick={()=> setEditName(true)}>
      EDIT
    </button>
    </div>
  
}

export default NamePicker
