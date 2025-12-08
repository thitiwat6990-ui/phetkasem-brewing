'use client'

import useScrollPosition from "@/app/hooks/useScrollPosition";
import React from "react";
import "./parallax.css";

const PARALLAX_SPEED = 0.8;
const Parallaxpage = () => {
  const scrollY = useScrollPosition();

  const transfromValue = scrollY * PARALLAX_SPEED;

  return (
    <div>
      <div
        style={{
          height: "500px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "90%",
            height: "500px",
            backgroundImage: "url('/images/bgbeer.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            zIndex: 1,
            marginTop: "200px",
            marginLeft: "75px",
          }}
          className="image-bg"
        >
          <div>
            <h1 className="culture">OUR BEER CULTURE</h1>
            <p className="description">
              Thai craft beer culture is driven by the passion of its brewers,
              <br /> who use local Thai rice to support farmers and craft
              unique, world-class brews that <br />
              tell the story of the land.
            </p>
            <a href="#" className="button-container">
              VIEW MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallaxpage;
