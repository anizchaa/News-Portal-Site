import React from "react";
import "../style.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const AdminDash = () => {
  return (
    <div className="footer-left">
      <h1>Admin Dashboard</h1>
      <NavLink to="/writearticle">
        <button style={{ margin: "70px" }}>Add article</button>
      </NavLink>
      <NavLink to="/updatearticle">
        <button>Update article </button>
      </NavLink>
    </div>
  );
};

export default AdminDash;
