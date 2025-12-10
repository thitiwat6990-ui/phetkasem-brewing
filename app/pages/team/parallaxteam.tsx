"use client";

import useScrollPosition from "@/app/hooks/useScrollPosition";
import { relative } from "path";
import React from "react";

const PARALLAX_SPEED = 0.8;
const Meettheteam = () => {
  const scrollY = useScrollPosition();

  const transfromValue = scrollY * PARALLAX_SPEED;

  return (
    <div>
      <div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "500px",
            marginTop: "-85px",
            backgroundImage: "url('/images/bgteambeer.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            zIndex: "0",
          }}
        >
            <div>
                <h1 style={{
                    position:'relative',
                    textAlign:'center',
                    justifyContent:'center',
                    zIndex:'1',
                    padding:'210px',
                    fontWeight:'900',
                    fontSize:'3rem',
                    color:'white',
                    textShadow:'1px 8px 0 #000 '

                }}>MEET THE TEAM</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Meettheteam;