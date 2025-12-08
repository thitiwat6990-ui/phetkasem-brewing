"use client";

import { useState, useEffect } from "react";
import BreweryHomePage from "./breweryhome/page";
import "./page.css";
import SlidingCarousel from "@/components/Carousel/SlidingCarousel";
import Parallaxpage from "@/components/Parallax/parallax";
import ProductImages from "@/components/allproduct/allproduct";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const textContainerClass = `hero-text ${isVisible ? "is-visible" : ""}`;

  const carouselData = [
    {
      id: "img1",
      imageUrl: "/images/rorker.png",
      caption: " ",
    },
    {
      id: "img2",
      imageUrl: "/images/singsep.png",
      caption: " ",
    },
    {
      id: "img3",
      imageUrl: "/images/cocowave.png",
      caption: " ",
    },
    {
      id: "img4",
      imageUrl: "/images/razz.png",
      caption: " ",
    },
    {
      id: "img5",
      imageUrl: "/images/bluefeez.png",
      caption: " ",
    },
  ];

  return (
    <>
      <BreweryHomePage />
      <div className={textContainerClass}>
        <h1 className="hero-text" style={{ transitionDelay: "0.2s" }}>
          ORDINARY BRAND
          <br />
          ULTIMATE FLAVOR
          <br />
          EXPERIENCE.
        </h1>
        <a href="#" className="seemore-button">
          SEE MORE
        </a>
        <img src="./images/severbeer.png" className="bg-img"></img>
        <div style={{ marginTop: "170px" }}>
          <h1 className="main-title">CRAFTED TO INSPIRE</h1>
          <img
            src="./images/line.png"
            style={{ width: "100px", marginLeft: "150px", marginTop: "20px" }}
          ></img>
          <h2
            style={{
              marginLeft: "150px",
              marginTop: "30px",
              lineHeight: "35px",
              color: "rgba(143, 143, 143, 1)",
            }}
          >
            These unique beers stand out from the mainstream with a diverse
            array of flavors and styles.
            <br /> They are meticulously crafted using creativity and
            imagination to perfect every detail of taste <br /> color, and
            aroma. This process is driven by a passion for experimentation and
            an unwavering <br /> commitment to using only the finest
            ingredients.
          </h2>
          <img src="./images/cheers.png" className="cheers"></img>
        </div>
        <img src="./images/bgproduct1.png" className="bg-product"></img>
        <h1 className="present">
          ENJOY YOUR DAY
          <br />
          MEET SOME SPECIAL
        </h1>
        <h2
          style={{
            marginLeft: "150px",
            marginTop: "30px",
            lineHeight: "35px",
            color: "rgba(255, 255, 255, 1)",
            zIndex: "3",
            position: "relative",
          }}
        >
          Breathe deep, smile wide, and dive into your day.
          <br /> You never know what magic awaits
          <br /> or whose extraordinary path might cross yours.
        </h2>
        <a href="#" className="details">
          VIEW MORE
        </a>
        <div>
          <h1 className="product-flavor">PRODUCT FLAVORS</h1>
          <img
            src="./images/line.png"
            style={{ width: "100px", marginLeft: "47%", marginTop: "20px" }}
          ></img>
          <div className="product-items">
            <div className="title-row">
              <h3 className="item-title">RORKER</h3>
              <span className="item-type">CRAFT</span>
            </div>
            <div className="title-row">
              <h3 className="item-title">SINGSEP</h3>
              <span className="item-type">CRAFT</span>
            </div>
            <div className="title-row">
              <h3 className="item-title">COCOWAVE</h3>
              <span className="item-type">CRAFT</span>
            </div>
            <div className="title-row">
              <h3 className="item-title">RAZZ</h3>
              <span className="item-type">CRAFT</span>
            </div>
            <div className="title-row">
              <h3 className="item-title">BLUEFEEZ</h3>
              <span className="item-type">CRAFT</span>
            </div>
            <div className="title-row">
              <h3 className="item-title">BEEHERN</h3>
              <span className="item-type">CRAFT</span>
            </div>
          </div>
          <div className="all-description">
            <p className="rorker-description">
              Thai roasted rice with Japanese rice , Teasting of Rice.
            </p>
            <p className="description-sing">
              Roasted caramel malt with Chocolate powder , Smooth and creamy
              teast.
            </p>
            <p className="cocowave-des">
              American Wheat with Roasted Coconut , Aroma of fruit smooth and
              fresh
            </p>
            <p className="razz-des">
              Raspberry beer has a sweet, refreshing and aromatic taste.
            </p>
            <p className="bluefeez-des">
              Teast of sour fruit Blubeery Orange and Mint , Summer.
            </p>
            <p className="beehern-des">
              Honey Apple Mead , sweet natural teasting.
            </p>
          </div>
          <img src="./images/bgpks.png" className="bgpks-image"></img>
          <div>
            <div className="card-effect">
              <img src="./images/kegfiller.png" className="keg"></img>
              <img src="./images/tappinghazy.png" className="hazy"></img>
            </div>
            <div style={{ marginTop: "-700px" }}>
              <img src="./images/mashing.png" className="brewer"></img>
              <img src="./images/homebrew.png" className="homebrew"></img>
            </div>
            <div className="process-brewery">
              <div className="process-images">
                <img src="./images/brewery.png" className="brewery"></img>
                <img src="./images/fermenting.png" className="ferment"></img>
                <img src="./images/bottle.png" className="bottle"></img>
                <img src="./images/tapping.png" className="tapping"></img>
              </div>
            </div>
            <div className="main-container">
              <div style={{ marginLeft: "250px" }}>Brewery</div>
              <div style={{ marginLeft: "-10px" }}>Fermentation</div>
              <div style={{ marginLeft: "-25px" }}>Packaging</div>
              <div style={{ marginLeft: "12px" }}>Draft Beer</div>
            </div>
            <div className="all-process">
              <p style={{ marginLeft: "230px" }}>
                Mashing for garvity
                <br />
                Sprage water
                <br />
                boiling wort,Cooldown
              </p>
              <p style={{ marginLeft: "115px" }}>
                Ale ferments at 15.5-24°C,
                <br />
                creating fruity flavors
                <br />
                Lager ferments at 7-13°C
                <br />
                cleaner, crisper beer
              </p>
              <p style={{ marginLeft: "70px" }}>
                Canning or bottling, following
                <br />
                the purging of oxygen from <br />
                the container to prevent oxidation.
              </p>
              <p style={{ marginLeft: "75px" }}>
                Draft beer is the purest,
                <br />
                freshest form, served directly
                <br />
                from a keg for an unparalleled
                <br />
                smooth and vibrant taste.
              </p>
            </div>
          </div>
          <Parallaxpage />
          <ProductImages />
          {/* <SlidingCarousel items={carouselData} /> */}
        </div>
      </div>
    </>
  );
}
