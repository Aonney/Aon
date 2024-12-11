import React from "react";
import "./Styles.css";

function App() {
  return (
    <div className="container">
      {/* ภาพรวมโรงแรม */}
      <section className="overview">
        <div className="overview-text">
          <h2>ภาพรวมโรงแรม</h2>
          <p>
            นอกจากที่พักจะได้รับการรับรองมาตรฐาน SHA ที่พักยังมีบริการ Wi-Fi ฟรี
            ในทุกห้องพัก และที่จอดรถฟรี ที่พักตั้งอยู่ในย่านตัวเมือง หนองคาย
            จึงอยู่ใกล้กับที่เที่ยวมากมายและสะดวกต่อการเดินทางไปสถานที่ต่างๆ
            ทริปยังไม่จบถ้าไม่ได้แวะไปที่เที่ยวชื่อดังอย่างสะพานมิตรภาพไทย-ลาว
            ที่พัก 3 ดาวคุณภาพสูงแห่งนี้มีบริการนวด, สระว่ายน้ำกลางแจ้ง และห้องอาหารคอยอำนวยความสะดวกแก่ผู้เข้าพัก
          </p>
        </div>

        {/* บริการเด่น */}
        <div className="services">
          <h2>บริการเด่น</h2>
          <ul>
            <li>บริการขนส่งสาธารณะในระยะ 650 เมตร</li>
            <li>แผนกต้อนรับ (24 ชั่วโมง)</li>
            <li>ใจกลางเมือง</li>
            <li>Wi-Fi ทุกห้อง (ฟรี)</li>
            <li>คาโรเกะ</li>
          </ul>
        </div>
      </section>

      {/* โปรโมชั่น */}
      <h2>โปรโมชั่น</h2>
      <section className="promotion">
        <div className="promo-item">
          <h3>1. โปรโมชั่นจองล่วงหน้า (Early Bird)</h3>
          <ul>
            <li>ลด 20% สำหรับการจองล่วงหน้า 30 วัน</li>
            <li>ลด 10% สำหรับการจองล่วงหน้า 15 วัน</li>
            <li>ระยะเวลา: ตั้งแต่วันนี้ถึง 31 ธันวาคม 2024</li>
          </ul>
        </div>
        <div className="promo-item">
          <h3>2. พักนานคุ้มกว่า (Stay Longer, Pay Less)</h3>
          <ul>
            <li>เข้าพัก 3 คืน ฟรี 1 คืน</li>
            <li>ส่วนลด 30% สำหรับการจอง 7 คืนขึ้นไป</li>
            <li>เงื่อนไข: โปรโมชั่นนี้ใช้ได้สำหรับทุกประเภทห้องพัก</li>
          </ul>
        </div>
      </section>

      {/* ปุ่มดูห้องพัก */}
      <section className="view-room">
        <button className="btn-view-room">ดูห้องพัก</button>
      </section>
    </div>
  );
}

export default App;
