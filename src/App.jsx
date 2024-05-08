import { useState } from 'react'
import './App.css'

import Editor from './components/editor'
import Displayer from './components/displayer';

function App() {
  const [name, setName] = useState('Initial');
  function handleNameChange (e) {
    setName(e.target.value);
  }

  const [email, setEmail] = useState("initial@fakemail.net")
  function handleEmailChange (e) {
    setEmail(e.target.value);
  }

  const [phone, setPhone] = useState("555 555-5555")
  function handlePhoneChange () {
    setPhone(e.target.value);
  }

  return (
    <>
      
        <h1>Editor</h1>
        <div>
          <h2>Personal Info</h2>
          <Editor label="Name" value={name} onChange={handleNameChange} />
          <Editor label="Email" value={email} onChange={handleEmailChange} />
          <Editor label="Phone" value={phone} onChange={handlePhoneChange} />
        </div>

        <div>
          <h2>Education</h2>
        </div>

        <div>
          <h2>Experience</h2>
        </div>
      

      <div>
        <h1>CV Displayer</h1>
        <Displayer 
          name={name} 
          email={email} 
          phone={phone}
        
        />

        
      </div>


    </>
  )
}

export default App
