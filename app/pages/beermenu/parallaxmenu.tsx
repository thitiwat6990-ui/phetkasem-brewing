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
        <div className='All-product'>
          <div>
            <div className="product12">
              <img src="/images/rorker.png"></img>
              <img src="/images/singsep.png"></img>
            </div>
            <div className='des-beer'>
                <h1 className="rorkermenu">RORKER</h1>
                <h1 className='singsepmenu'>SINGSEP</h1>
            </div>
            <div className="beer-description">
                <p>NAME : RORKER<br/>STYLE : RICE LAGER<br/>ABV : 5.5 %<br/>IBU : 30<br/>Exceptionally smooth and easy-drinking,<br/>this lager uniquely blends Japanese and<br/>local roasted rice for ultimate refreshment.</p>
                <p>NAME : SINGSEP<br/>STYLE : PORTER STOUT<br/>ABV : 5.5 %<br/>IBU : 30<br/>This deep, cocoa-colored porter delivers<br/>an authentically sweet, satisfying, and<br/>utterly pleasant chocolate experience in every sip.</p>
            </div>
          </div>
          <div>
            <div className="product34"> 
              <img src='/images/cocowave.png'></img>
              <img src='/images/razz.png'></img>
            </div>
            <div className='des-product'>
              <h1 className="cocowave">COCOWAVE</h1>
              <h1 className="razz" style={{marginLeft:'120px'}}>RAZZ</h1>
            </div>
            <div className="beer-description2">
              <p>NAME : COCOWAVE<br/>STYLE : AMERICAN WHEAT<br/>ABV : 5.5 %<br/>IBU : 25<br/>This is the perfect blend of the style&apos;s signature<br/>smoothness with the delicate<br/>aroma of pure, young coconut.</p>
              <p >NAME : RAZZ<br/>STYLE : RASPBERRY WIT<br/>ABV : 5 %<br/>IBU : 20<br/>We brew this ale with a perfectly balanced<br/>sweet-tart flavor from real raspberries,<br/>complemented by soft, bright carbonation.</p>
            </div>
          </div>
          <div>
            <div className="product34"> 
              <img src='/images/bluefeez.png'></img>
              <img src='/images/razz.png'></img>
            </div>
            <div className='des-product'>
              <h1 className="bluefeez">BLUEFEEZ</h1>
              <h1 className="razz" style={{marginLeft:'120px'}}>RAZZ</h1>
            </div>
            <div className="beer-description2">
              <p>NAME : BLUEFEEZ<br/>STYLE : FRUIT SOUR<br/>ABV : 6 %<br/>IBU : 10<br/>This is the perfect blend of the style&apos;s signature<br/>smoothness with the delicate<br/>aroma of pure, young coconut.</p>
              <p >NAME : RAZZ<br/>STYLE : RASPBERRY WIT<br/>ABV : 5 %<br/>IBU : 20<br/>We brew this ale with a perfectly balanced<br/>sweet-tart flavor from real raspberries,<br/>complemented by soft, bright carbonation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productmenu;
