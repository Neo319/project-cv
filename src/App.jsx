import { useState } from 'react'
import './App.css'

import Editor from './components/editor'
import Displayer from './components/displayer';

import Education from './components/education';
import PersonalData from './components/personalData';

function App() {
  
//personal data
  const [person, setPerson] = useState({
    name: "John Doe",
    email: "jd@fakemail.com",
    phone: "555 555-5555"
  })

  function handlePersonChange (e, changedProp) {
    const newPerson = {...person, [changedProp]: e.target.value};
    setPerson(newPerson);
  }
  

  return (
    <>
      
        <h1>Editor</h1>
        <div>
          <h2>Personal Info</h2>
          <PersonalData person={person} handlePersonChange={handlePersonChange} />
        </div>

        <div>
          <h2>Education</h2>
          {/* <Education /> */}
        </div>

        <div>
          <h2>Experience</h2>
        </div>
      

      <div>
        <h1>CV Displayer</h1>
        <Displayer 
          name={person.name} 
          email={person.email} 
          phone={person.phone}
        
        />

        
      </div>


    </>
  )
}

export default App
