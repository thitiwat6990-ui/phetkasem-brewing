import "./allproduct.css";

export default function ProductImages() {
  return (
    <div>
      <div className="all-product">
        <div>
          <img src="./images/rorker.png"></img>
          <h1 className="product-name">RORKER</h1>
          <p className="all-des">Rice Lager</p>
        </div>
        <div>
          <img src="./images/singsep.png"></img>
          <h1 className="product-name">SINGSEP</h1>
          <p className="all-des">Porter</p>
        </div>
        <div>
          <img src="./images/cocowave.png"></img>
          <h1 className="product-name">COCOWAVE</h1>
          <p className="all-des">American Wheat</p>
        </div>
        <div>
          <img src="./images/razz.png"></img>
          <h1 className="product-name">RAZZ</h1>
          <p className="all-des">Raspberry Wheat</p>
        </div>
      </div>
      {/* <div >
        <img src="./images/bluefeez.png"></img>
      </div> */}
    </div>
  );
}
