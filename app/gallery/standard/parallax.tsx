"use client";

import useScrollPosition from "@/app/hooks/useScrollPosition";
import "./parallax.css";

const PARALLAX_SPEED = 0.8;
const Bggallery = () => {
  const scrollY = useScrollPosition();

  const transfromValue = scrollY * PARALLAX_SPEED;

  return (
    <div>
      <div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "800px",
            marginTop: "-120px",
            backgroundImage: "url('/images/bggallery.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            zIndex: "-1",
          }}
        >
          <div>
            <h1 className="beer-menu" style={{marginTop:'325px'}}>PRODUCT GALLERY</h1>
            <p className="pks-brewery" style={{color:'rgb(213, 213, 213)'}}>PHETKASEM BREWING</p>
          </div>
        </div>
      <div>
        <div
          style={{
            position: "absolute",
            width: "95%",
            height: "420px",
            marginTop: "720px",
            backgroundImage: "url('/images/bgrorker.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            zIndex: "-1",
            marginLeft:'40px',
            border:'3px solid black'
          }}
        >
          <div>
            <h1 className="beer-menu" style={{marginTop:'20px'}}>RORKER</h1>
            <p className="pks-brewery" style={{color:'rgba(255, 255, 255, 1)'}} >THAI ROASTED RICE</p>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            position: "absolute",
            width: "95%",
            height: "420px",
            marginTop: "1180px",
            backgroundImage: "url('/images/chocobarbg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            zIndex: "-1",
            marginLeft:'40px',
            border:'3px solid black'
          }} 
        >
          <div>
            <h1 className="beer-menu" style={{marginTop:'20px'}}>SINGSEP</h1>
            <p className="pks-brewery" style={{color:'rgba(255, 255, 255, 1)'}} >CHOCO MALT</p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "95%",
            height: "420px",
            marginTop: "1640px",
            backgroundImage: "url('/images/bgcocowave.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            zIndex: "-1",
            marginLeft:'40px',
            border:'3px solid black'
          }} 
        >
          <div>
            <h1 className="beer-menu" style={{marginTop:'20px'}}>COCOWAVE</h1>
            <p className="pks-brewery" style={{color:'rgba(255, 255, 255, 1)'}} >CHOCO MALT</p>
          </div>
        </div>

      </div>
        
      </div>
    </div>
  );
};

export default Bggallery;
