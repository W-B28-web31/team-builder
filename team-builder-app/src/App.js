import React, { useState } from 'react';

import './App.css';

import MemberCard from './components/MemberCard';
import Form from './components/Form';



const teamMembersList = [{
  id: 0,
  fname: "William",
  lname: "Bell",
  email: "wtb@aol.com",
  role: "Frontend Engineer"
}]


function App() {
  const [ setTeamMembers ] = useState(teamMembersList)
  
//  card format
  const addMemberToCard = memCard => {
    const newCard = {
    id: Math.floor(Math.random() * Date.now()),
    fname: memCard.fname,
    lname: memCard.lname,
    email: memCard.email,
    role: memCard.role
    };
    setTeamMembers([newCard, ...teamMembersList])
  }


  return (
    <div className="App">
      <h1 className="header">Enter Your Team Members</h1>
      <div className="form-container">
      <Form addMember={addMemberToCard} />
      <MemberCard teamMembers={teamMembersList} />
      </div>
    </div>
  );
}

export default App;
