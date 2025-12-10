import "./page.css";
import Bggallery from "./parallax";

export default function Standard() {
  return (
    <div className='page'>
      <Bggallery />
      <div>
        <div>
          <div >
            <div className="product-can">
              <img
                src="/images/rorker.png"
                style={{ marginTop: "860px" }}
              ></img>
            </div>
            <div className="product-can">
              <img
                src="/images/singsep.png"
                style={{ marginTop: "220px" }}
              ></img>
            </div>
            <div className='product-can'>
                <img src='/images/cocowave.png'
                style={{marginTop:'220px'}}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
