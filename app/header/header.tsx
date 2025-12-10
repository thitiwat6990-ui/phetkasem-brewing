"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./header.css";
import Image from "next/image";
import "../globals.css";

export default function HeaderPage() {
  const [showBanner, setShowBanner] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };



  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="all-header">
      <nav>
        <div>
          <ul style={{ }} className="header">
            <li className="dropdown-parent ">
              <span className="dropdown-label" style={{marginLeft:'0px'}}>HOME</span>
              <div className="dropdown-content">
                <ul className="sub-menu" >
                  <li>
                    <a href=" / ">HOME</a>
                  </li>
                  
                </ul>
              </div>
            </li>
            <li className="dropdown-parent">
              <span className="dropdown-label">PAGES</span>
              <div className="dropdown-content">
                <ul className="sub-menu">
                  <li>
                    <a href="/pages/beermenu">PRODUCT MENU</a>
                  </li>
                  <li>
                    <a href="/pages/team">MEET THE TEAM</a>
                  </li>
                  <li>
                    <a href="#">THE OWNER</a>
                  </li>
                  <li>
                    <a href="#">CONTACT US</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="dropdown-parent">
              <span className="dropdown-label">GALLERY</span>
              <div className="dropdown-content">
                <ul className="sub-menu">
                  <li>
                    <a href="/gallery/standard">STANDARD</a>
                  </li>
                  <li>
                    <a href="#">GALLERY</a>
                  </li>
                  <li>
                    <a href="#">SINGLE TYPES</a>
                  </li>
                </ul>
              </div>
            </li>

            <div style={{zIndex:'10'}}>
              <img
                src="/images/pkslogo.png"
                alt="Phetkasem Logo"
                className="logo"
              ></img>
            </div>

            <li className="dropdown-parent">
              <span className="dropdown-label">BLOG</span>
              <div className="dropdown-content">
                <ul className="sub-menu">
                  <li>
                    <a href="#">STANDARD</a>
                  </li>
                  <li>
                    <a href="#">GALLERY</a>
                  </li>
                  <li>
                    <a href="#">SINGLE TYPES</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="dropdown-parent">
              <span className="dropdown-label">LIST</span>
              <div className="dropdown-content">
                <ul className="sub-menu">
                  <li>
                    <a href="#">STRONG</a>
                  </li>
                  <li>
                    <a href="#">MEDIUM</a>
                  </li>
                  <li>
                    <a href="#">LOW</a>
                  </li>
                  <li>
                    <a href="#">SEE ALL</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="dropdown-parent">
              <span className="dropdown-label">ELEMENT</span>
              <div className="dropdown-content">
                <ul className="sub-menu">
                  <li>
                    <a href="#">STANDARD</a>
                  </li>
                  <li>
                    <a href="#">GALLERY</a>
                  </li>
                  <li>
                    <a href="#">SINGLE TYPES</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div style={{marginRight:'-300px'}} className="contact">
            <a
              href="https://www.instagram.com/phetkasembrewing/"
              target="_blank" style={{zIndex:'10'}}
            >
              <img
                src="/images/iglogo.png"
                alt="instargram"
                style={{ width: "25px", height: "auto"}}
              ></img>
            </a>
            <a href="https://www.facebook.com/phetkasembrewing" target="_blank" style={{zIndex:'10'}}>
              <img
                src="/images/fblogo.png"
                alt="facebook"
                style={{ width: "11px", height: "auto" }}
              ></img>
            </a>
            <button
              style={{ fontSize: "30px", marginTop: "-13px" }}
              onClick={toggleMenu}
              className="hamburger-btn"
              aria-label="Toggle navigation"
            >
              ☰
            </button>
            <div className={`slide-menu ${isMenuOpen ? "open" : ""}`} style={{zIndex:'999'}}>
              <div className="sub-menu">
                <a
                  style={{ marginLeft: "400px" }}
                  className="close-btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  X
                </a>
                <h1
                  style={{
                    fontSize: "30px",
                    padding: "30px",
                    fontWeight: "blod",
                  }}
                >
                  Phetkasem Brewing
                </h1>
                <img
                  src="/images/line.png"
                  alt="line"
                  style={{
                    width: "300px",
                    height: "10px",
                    marginLeft: "20px",
                    marginTop: "-20px",
                  }}
                ></img>
                <p style={{ marginTop: "30px" }} className="doc-pks">
                  Phetkasem Road is the longest main highway in Thailand,
                  extending from Bangkok to the South and traversing 13
                  provinces. We named our brand after it to reflect our desire
                  to offer drinkers stable and long-lasting happiness.
                </p>
                <h2
                  style={{
                    marginTop: "30px",
                    textAlign: "center",
                    fontSize: "24px",
                  }}
                >
                  Our Brands
                </h2>
                <div
                  style={{
                    display: "center",
                    gap: "50px",
                    justifyItems: "center",
                  }}
                >
                  <img
                    src="/images/zunnero.png"
                    alt="zunnero"
                    style={{ width: "200px", height: "10", marginTop: "30px" }}
                  ></img>
                  <img
                    src="/images/beehern.png"
                    alt="beehern"
                    style={{
                      width: "150px",
                      height: "auto",
                      marginTop: "30px",
                    }}
                  ></img>
                </div>
                <p style={{ marginTop: "40px" }} className="doc-pks">
                  Get Social
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}
              >
                <a
                  href="https://www.instagram.com/phetkasembrewing/"
                  target="_blank"
                >
                  <img
                    src="/images/igwhite.png"
                    alt="instargram"
                    style={{ width: "25px", height: "auto" }}
                  ></img>
                </a>
                <a
                  href="https://www.facebook.com/phetkasembrewing"
                  target="_blank"
                >
                  <img
                    src="/images/fbwhite.png"
                    alt="facebook"
                    style={{ width: "11px", height: "auto" }}
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className={`location-banner ${showBanner ? "slide-in" : ""}`}>
            <img
              src="/images/book.png"
              alt="sunny"
              className="banner-image"
            ></img>
            <h2 className="banner-text">
              <span style={{ color: "orange" , marginLeft:'-620px'}}>WHERE TO</span>
              <span
                className="blinking-text"
                style={{ color: "white", marginLeft: "5px" }}
              >
                TRY?
              </span>
            </h2>
          </div>
        </div>
      </nav>
    </header>
  );
}
