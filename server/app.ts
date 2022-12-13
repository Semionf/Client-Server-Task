import express, { Request, Response } from "express";
import { arrayOfStudents } from "./database/studentDb";
import cors from "cors";
import { IStudent } from "./database/models/studentModel";

const app = express();
let studentsArr = arrayOfStudents;
app.use(cors());
app.use(express.json());
app.get("/", function (req: Request, res: Response) {
  res.send("Hello World");
});

app.get("/api/students", function (req: Request, res: Response) {
  res.send(studentsArr);
});

app.post("/api/students", function (req: Request, res: Response) {
  let student: IStudent = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: parseInt(req.body.age),
    id: parseInt(req.body.id),
  };
  console.log(student.id);
  arrayOfStudents.push(student);
  res.send(student);
});

app.delete("/api/students/:id", function (req: Request, res: Response) {
  const id = parseInt(req.params.id);
  console.log(studentsArr);
  console.log(parseInt(req.params.id));
  let temp = studentsArr.filter((s) => s.id !== id);
  console.log(studentsArr);
  studentsArr = temp;
  res.send();
});

app.listen(3000);
