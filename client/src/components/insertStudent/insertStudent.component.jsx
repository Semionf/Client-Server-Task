import { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { addStudent } from "../studentRow/student.services";

import "./style.css";
let tempId = 1;
export const InsertStudent = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const handleAddData = async () => {
    if (firstName.length === 0) alert("Need to enter first name");
    else if (lastName.length === 0) alert("Need to enter last name");
    else if (age.length === 0) alert("Need to enter age");
    else {
      await addStudent({
        firstName: firstName,
        lastName: lastName,
        age: age,
        id: tempId,
      });
      tempId++;
      alert("New Student been added");
    }
  };
  return (
    <div className="form-container">
      <form
        name="myForm"
        method="post"
        required
      >
        <div className="input-group mb-3">
          <span
            className="input-group-text"
            id="basic-addon1"
          >
            First Name
          </span>
          <input
            type="text"
            name="fname"
            className="form-control"
            placeholder="First Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            required
            pattern="[A-Za-z]{1,15}"
            onChange={(o) => setFirstName(o.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <span
            className="input-group-text"
            id="basic-addon1"
          >
            Last Name
          </span>
          <input
            type="text"
            name="lname"
            className="form-control"
            placeholder="Last Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            required
            pattern="[A-Za-z]{1,15}"
            onChange={(o) => setLastName(o.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <span
            className="input-group-text"
            id="basic-addon1"
          >
            Age
          </span>
          <input
            type="text"
            name="age"
            className="form-control"
            placeholder="Age"
            aria-label="Username"
            aria-describedby="basic-addon1"
            required
            pattern="[0-9]{1,3}"
            onChange={(o) => setAge(o.target.value)}
          />
        </div>
        <button
          onClick={handleAddData}
          type="button"
          className="btn btn-primary"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};
