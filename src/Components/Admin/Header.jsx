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
            <Link to="/">Web</Link>
          </li>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/admin/products-table">ProductsTable</Link>
          </li>
          <li>
            <Link to="/admin/admin/add-products">AddProducts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
