import { useState } from "react";
import "./App.css";

import Displayer from "./components/displayer";

import Education from "./components/education";
import PersonalData from "./components/personalData";
import Experience from "./components/Experience";

function App() {
  //personal data
  const [person, setPerson] = useState({
    name: "John Doe",
    email: "jd@fakemail.com",
    phone: "555 555-5555",
  });

  //education data
  const [edu, setEdu] = useState({
    school: "University of Whatever",
    location: "Antarctica",
    start: "Jan 2008",
    end: "Feb 2013",
    major: "Astrophysics",
  });

  const [experience, setExperience] = useState({
    company: "Google",
    role: "CEO",
    years: "10",
  });

  // how personal data entries are changed
  function handlePersonChange(e, changedProp) {
    const newPerson = { ...person, [changedProp]: e.target.value };
    setPerson(newPerson);
  }

  // how education entries are changed (indexed in array)
  function handleEduChange(e, changedProp) {
    const newEdu = { ...edu, [changedProp]: e.target.value };

    setEdu(newEdu);
  }

  function handleExpChange(e, changedProp) {
    const newExperience = { ...experience, [changedProp]: e.target.value };
    setExperience(newExperience);
  }

  return (
    <>
      <div className="container">
        <div className="editor">
          <h1>CV Editor</h1>

          <h2>Personal Info</h2>
          <PersonalData
            person={person}
            handlePersonChange={handlePersonChange}
          />
          <h2>Education</h2>
          <Education edu={edu} handleEduChange={handleEduChange} />
          <h2>Experience</h2>
          <Experience
            experience={experience}
            handleExpChange={handleExpChange}
          />
        </div>
        <div className="displayer">
          <h1>{person.name}</h1>
          <Displayer person={person} edu={edu} experience={experience} />
        </div>
      </div>
    </>
  );
}

export default App;
