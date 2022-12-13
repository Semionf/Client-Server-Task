import { Route, Routes } from "react-router-dom";
import "./App.css";
import { StudentList } from "./components/studentList/studentList.component";
import { InsertStudent } from "./components/insertStudent/insertStudent.component";
import { NotFound } from "./components/PageNotFound/pageNotFound";
import { MainLayout } from "./components/Layout/main/main.layout";

function App() {
  return (
    <>
      <div className="Menu">
        <MainLayout></MainLayout>
      </div>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<StudentList />}
          />
          <Route
            path="/api/students"
            element={<InsertStudent />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
