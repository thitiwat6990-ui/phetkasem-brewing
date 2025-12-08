"use client";

import "./footer.css";

export default function FooterPage() {
  return (
    <footer className="footer-container">
      <div className="main-footer">
        <h1 style={{}}>TEASTING ROOM</h1>
        <h1 style={{ marginLeft: "-30px" }}>LOCATION</h1>
        <h1 style={{ marginLeft: "34px" }}>OUR BRANDS</h1>
        <h1 style={{ marginLeft: "-55px" }}>INFO</h1>
      </div>
      <div className="des-footer">
        <p style={{ fontWeight: "900" }}>
          THURSDAY : 4PM - 9PM
          <br />
          FRIDAY : 4PM - 9PM
          <br />
          SATURDAY : 12PM - 6PM
          <br />
          SUNDAY : 12PM - 6PM
        </p>
        <p style={{ marginLeft: "30px" }}>
          Phetkasembrewing@gmail.com
          <br />
          092-6541461 K.SUN
          <br />
          080-7820606 K.NAM
          <br />
          Bangkok, Thailand
        </p>
        <p style={{}}>
          ZUNNERO
          <br />
          LAMPHUN BREWING
          <br />
          POTON CRAFT
        </p>
        <div style={{ fontFamily: "Arial, sans-serif" }}>
          <a>Contact us</a>
          <br />
          <a>Join Our Team</a>
          <br />
          <a>Reservation</a>
          <br />
          <a>Find Distributors</a>
          <br />
          <a>The Owner</a>
          <br />
        </div>
      </div>
      <div className="last-des">
        <p style={{ color: "#959595ff", fontSize: "12px" }}>
          *Please contact us to book your tour in advance.
        </p>
        <a
          style={{
            color: "orange",
            fontSize: "20px",
            fontWeight: "900",
            marginLeft: "55px",
            marginTop: "-8px",
          }}
          href="https://www.google.com/maps/place/43+%E0%B8%8B%E0%B8%AD%E0%B8%A2+%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B5%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B8%9D%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B7%E0%B8%AD+10+%E0%B9%81%E0%B8%82%E0%B8%A7%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%82%E0%B8%A1+%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%82%E0%B8%A1+%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3+10160/@13.6889399,100.3579517,17z/data=!3m1!4b1!4m6!3m5!1s0x30e2bdfa73248fb1:0xbd4eb44c068f7816!8m2!3d13.6889347!4d100.3605266!16s%2Fg%2F11h07s7jmb?entry=ttu&g_ep=EgoyMDI1MTEzMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          GET DIRECTION
        </a>
        <a href="https://www.instagram.com/phetkasembrewing/" target="_blank">
          <img
            src="/images/igwhite.png"
            style={{ width: "25px", marginLeft: "180px" }}
          ></img>
        </a>
        <a href="https://www.facebook.com/phetkasembrewing" target="_blank">
          <img
            src="/images/fbwhite.png"
            style={{ width: "10px", marginLeft: "20px" }}
          ></img>
        </a>
      </div>
    </footer>
  );
}
