import { useState } from 'react'
import './App.css'

import Editor from './components/editor'
import Displayer from './components/displayer';

function App() {
  const [name, setName] = useState('Initial');

  function handleNameChange (e) {
    setName(e.target.value);
  }

  return (
    <>
      
      <div>
        <h1>Editor</h1>
        <Editor label="Name" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <h1>CV Displayer</h1>
        <Displayer name={name}></Displayer>
        
      </div>


    </>
  )
}

export default App
