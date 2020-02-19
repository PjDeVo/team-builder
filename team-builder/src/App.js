import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import members from "./data/Names";
import MembersList from "./components/MembersList";

function App() {
  const [membersList, setMembersList] = useState(members);

  const addNewMember = member => {
    const newMember = {
      id: member.id,
      name: member.name,
      startingCohort: member.startingCohort,
      currentCohort: member.currentCohort
    };
    setMembersList([...membersList, newMember]);
  };
  console.log(membersList);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>My First React App</h1>
          <h2>Displaying Form Capibilities</h2>
        </div>
      </header>

      <div className="App-Body">
        <MembersList team={membersList} />
        <Form addNewMember={addNewMember} team={membersList} />
      </div>
    </div>
  );
}

export default App;
