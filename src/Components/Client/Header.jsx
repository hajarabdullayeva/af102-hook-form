import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "teal",
        padding: 10
      }}
    >
      <h1>Logo</h1>
      <nav>
        <ul style={{ display: "flex", gap: 10 }}>
        <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
