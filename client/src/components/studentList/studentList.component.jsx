import React, { useEffect, useState } from "react";
import { getStudent, removeStudent } from "../studentRow/student.services";
import "./style.css";
export function StudentList(props) {
  const [studentsArr, setStudentsArr] = useState([]);
  const initComponent = async (student) => {
    let studnets = await getStudent();
    setStudentsArr(studnets);
  };
  const handleDelete = async (id) => {
    let student = await studentsArr.filter((s) => {
      return s.id === id;
    });
    console.log(student);
    let students = await studentsArr.filter((s) => {
      return s.id !== id;
    });
    setStudentsArr(students);

    removeStudent(id);
  };
  useEffect(() => {
    initComponent();
  }, []);
  return (
    <>
      <div className="container-table">
        <span>First Name</span>
        <span>Last Name</span>
        <span>Age</span>
        <span>Operation</span>
      </div>
      <div className="line"></div>
      {studentsArr &&
        studentsArr.map((s) => {
          return (
            <StudentInfo
              firstName={s.firstName}
              lastName={s.lastName}
              age={s.age}
              id={s.id}
              handleDelete={handleDelete}
            ></StudentInfo>
          );
        })}
    </>
  );
}

const StudentInfo = ({ firstName, lastName, age, id, handleDelete }) => {
  return (
    <>
      <div className="container-line">
        <span className="span-text">{firstName}</span>
        <span className="span-text">{lastName}</span>
        <span className="span-text">{age}</span>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(id)}
        >
          Remove
        </button>
      </div>
      <div className="line"></div>
    </>
  );
};
