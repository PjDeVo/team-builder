import React, { useState } from "react";
import MembersList from "./MembersList";

function Form(props) {
  //   console.log(props);

  const [form, setForm] = useState({
    id: props.team.length + 1,
    name: " ",
    startingCohort: " ",
    currentCohort: "WebPT13 "
  });

  const submitForm = e => {
    e.preventDefault();

    props.addNewMember(form);

    console.log(MembersList);
    alert("Congrats! You Are Now A Part OF Web PT13! See your Name Above!");
  };

  const handleChanges = e => {
    // console.log(e.target);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const modelError = e => {
    alert("You can not change this data!");
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="newMembername"> New Member Name </label>
      <input
        type="text"
        placeholder="Enter Your Name Here"
        id="newMemberName"
        name="name"
        value={form.name}
        onChange={handleChanges}
      />
      <label htmlFor="newMemberStartingCohort"> Member Starting Cohort </label>
      <input
        type="text"
        placeholder="What Cohort Did You Start I"
        id="newMemberStartingCohort"
        name="startingCohort"
        value={form.startingCohort}
        onChange={handleChanges}
      />
      <label htmlFor="newMemberStartingCohort"> Member Current Cohort </label>
      <input
        type="text"
        placeholder="Welcome to PT13"
        id="newMemberStartingCohort"
        name="currentCohort"
        value={form.currentCohort}
        onChange={modelError}
      />

      <button type="submit"> Join WebPT13</button>
    </form>
  );
}

export default Form;
