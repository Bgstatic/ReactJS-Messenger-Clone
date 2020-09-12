import React, { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [message, setMessage] = useState([])
  const sendMessage = (event) => {
     
    setMessage([...message, input])
    setInput('');

  }

  return (

    <div className="App">
      <h1>Ready to Go</h1>
      <input type="text" value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
