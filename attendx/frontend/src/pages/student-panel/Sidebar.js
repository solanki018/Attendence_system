// Sidebar.js
import { Link } from "react-router-dom";
import "../../styles/student-panel/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/student" className="sidebar-link">
        <i className="icon-home"></i> Dashboard
      </Link>
      <Link to="/profile-student" className="sidebar-link">
        <i className="icon-user"></i>Profile
      </Link>
    </div>
  );
}

export default Sidebar;
