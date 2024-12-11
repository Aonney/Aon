import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="menu-item">
        <i className="bi bi-house-fill"></i>
        <p>หน้าแรก</p>
      </div>
      <div className="menu-item">
        <i className="bi bi-cart-fill"></i>
        <p>ดูห้องพัก</p>
      </div>
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="menu-item">
        <i className="bi bi-person-fill"></i>
        <p>โปรไฟล์</p>
      </div>
      <div className="menu-item">
        <i className="bi bi-three-dots"></i>
        <p>อื่นๆ</p>
      </div>
    </nav>
  );
}

export default Navbar;
