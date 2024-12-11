import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="#about">เกี่ยวกับเรา</a>
        <a href="#contact">ติดต่อเรา</a>
        <a href="#privacy">นโยบายความเป็นส่วนตัว</a>
        <a href="#terms">ข้อกำหนดและเงื่อนไข</a>
      </div>

      <div className="social-icons">
        <i className="bi bi-facebook" onClick={() => window.open('https://www.facebook.com', '_blank')}></i>
        <i className="bi bi-twitter" onClick={() => window.open('https://www.twitter.com', '_blank')}></i>
        <i className="bi bi-instagram" onClick={() => window.open('https://www.instagram.com', '_blank')}></i>
        <i className="bi bi-linkedin" onClick={() => window.open('https://www.linkedin.com', '_blank')}></i>
      </div>

      <div className="copyright">
        <p>&copy; 2024 ชื่อเว็บไซต์. สงวนลิขสิทธิ์</p>
      </div>
    </div>
  );
}

export default Footer;
