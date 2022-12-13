import { Link } from "react-router-dom";
import "./style.css";

export const MainLayout = () => {
  return (
    <div className="container">
      <Link
        to="/"
        className="link"
      >
        Home
      </Link>
      <Link
        to="/api/students"
        className="link"
      >
        Add Student
      </Link>
    </div>
  );
};
