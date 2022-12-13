import axios from "axios";

export const getStudent = async () => {
  let result = await fetch("http://localhost:3000/api/students");
  let arrayOfStudents = await result.json();
  return arrayOfStudents;
};

export const addStudent = async (student) => {
  await axios.post("http://localhost:3000/api/students", student);
};

export const removeStudent = async (id) => {
  console.log(id);
  let url = `http://localhost:3000/api/students/${id}`;
  await axios.delete(url);
};
