"use client";

import useScrollPosition from "@/app/hooks/useScrollPosition";
import React from "react";
import "./parallaxmenu.css";

const PARALLAX_SPEED = 0.8;
const Productmenu = () => {
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
            marginTop: "-600px",
            backgroundImage: "url('/images/5productsmain.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            zIndex: "0",
          }}
        >
          <div>
            <p className="pks-brewery">PHETKASEM BREWERY</p>
            <h1 className="beer-menu">PRODUCT MENU</h1>
          </div>

        </div>
        <img src="/images/bgmenu.jpg" className="bg-menu"></img>
        
        
      </div>
    </div>
  );
};

export default Productmenu;
