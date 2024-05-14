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

  // how personal data entries are changed
  function handlePersonChange (e, changedProp) {
    const newPerson = {...person, [changedProp]: e.target.value};
    setPerson(newPerson);
  }


  
//education data
const [edu, setEdu] = useState([{
  school:   "University of Whatever",
  location: "Antarctica",
  start:    "Jan 2008",
  end:      "Feb 2013",
  major:    "Astrophysics"
}]);

// how education entries are changed (indexed in array)
function handleEduChange (e, index, changedProp) {
  console.log(changedProp)
  console.log(index)
  const newEdu = [...edu];
  newEdu[index] = {...newEdu[index], [changedProp]: e.target.value};
  
  setEdu(newEdu);


}

  function addEduItem () {
    const newEdu = [...edu];
    newEdu.push({
      school:   "U of T",
      location: "Toronto",
      start:    "Jan 2020",
      end:      "Apr 2024",
      major:    "Computer Science"
    });
    setEdu(newEdu);
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
          <Education edu={edu} handleEduChange={handleEduChange}/>
          <button onClick={addEduItem}>+Education</button>
        </div>

        <div>
          <h2>Experience</h2>
        </div>
      

      <div>
        <h1>CV Displayer</h1>
        <Displayer 
          person={person}
          edu={edu}
        
        />

        
      </div>


    </>
  )
}

export default App
