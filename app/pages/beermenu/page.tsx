import Productmenu from "./parallaxmenu";

export default function Beermenu() {
  return (
    <div>
      <Productmenu />

      <div className="All-product">
        <div key="beers-block-1">
          <div className="product12">
            <img src="/images/rorker.png" alt="Rorker Can" />
            <img src="/images/singsep.png" alt="Singsep Can" />
          </div>
          <div className="des-beer">
            <h1 className="rorkermenu">RORKER</h1>
            <h1 className="singsepmenu">SINGSEP</h1>
          </div>
          <div className="beer-description">
            <p>
              NAME : RORKER
              <br />
              STYLE : RICE LAGER
              <br />
              ABV : 5.5 %<br />
              IBU : 30
              <br />
              Exceptionally smooth and easy-drinking,
              <br />
              this lager uniquely blends Japanese and
              <br />
              local roasted rice for ultimate refreshment.
            </p>
            <p>
              NAME : SINGSEP
              <br />
              STYLE : PORTER STOUT
              <br />
              ABV : 5.5 %<br />
              IBU : 30
              <br />
              This deep, cocoa-colored porter delivers
              <br />
              an authentically sweet, satisfying, and
              <br />
              utterly pleasant chocolate experience in every sip.
            </p>
          </div>
        </div>
        <div key="beers-block-2">
          <div className="product34">
            <img src="/images/cocowave.png" alt="Cocowave Can" />
            <img src="/images/razz.png" alt="Razz Can" />
          </div>
          <div className="des-product">
            <h1 className="cocowave">COCOWAVE</h1>
            <h1 className="razz" style={{ marginLeft: "120px" }}>
              RAZZ
            </h1>
          </div>
          <div className="beer-description2">
            <p>
              NAME : COCOWAVE
              <br />
              STYLE : AMERICAN WHEAT
              <br />
              ABV : 5.5 %<br />
              IBU : 25
              <br />
              This is the perfect blend of the style&apos;s signature
              <br />
              smoothness with the delicate
              <br />
              aroma of pure, young coconut.
            </p>
            <p>
              NAME : RAZZ
              <br />
              STYLE : RASPBERRY WIT
              <br />
              ABV : 5 %<br />
              IBU : 20
              <br />
              We brew this ale with a perfectly balanced
              <br />
              sweet-tart flavor from real raspberries,
              <br />
              complemented by soft, bright carbonation.
            </p>
          </div>
        </div>
        <div key="beers-block-3">
          <div className="product34">
            <img src="/images/bluefeez.png" alt="Bluefeez Can" />
            <img src="/images/razz.png" alt="Razz Can" />
          </div>
          <div className="des-product">
            <h1 className="bluefeez">BLUEFEEZ</h1>
            <h1 className="razz" style={{ marginLeft: "120px" }}>
              RAZZ
            </h1>
          </div>
          <div className="beer-description2">
            <p>
              NAME : BLUEFEEZ
              <br />
              STYLE : FRUIT SOUR
              <br />
              ABV : 6 %<br />
              IBU : 10
              <br />
              This is the perfect blend of the style&apos;s signature
              <br />
              smoothness with the delicate
              <br />
              aroma of pure, young coconut.
            </p>
            <p>
              NAME : RAZZ
              <br />
              STYLE : RASPBERRY WIT
              <br />
              ABV : 5 %<br />
              IBU : 20
              <br />
              We brew this ale with a perfectly balanced
              <br />
              sweet-tart flavor from real raspberries,
              <br />
              complemented by soft, bright carbonation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
