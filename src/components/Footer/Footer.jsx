import React from 'react'
import visa from '../../assets/images/card-mastercard.752f7e25179580b3a52ad2685adac322.svg'
import img2 from "../../assets/images/card-visa.0410ad10e0c833cc731196d7e27cd69a.svg";

import img4 from "../../assets/images/cod-en.abfc964830e15c5e9f1fd437949ca93a.svg";
import img5 from "../../assets/images/google-play.4cf9f5b4e46adc5f504afb9c6ff0f156.svg";
import img6 from "../../assets/images/valu_v2.5c5caa11044cda0ee11afa64d3ac083f.svg";
import img7 from "../../assets/images/card-amex.2d18bdded90ca527c261253cc5dc2531.svg";


export default function Footer() {
  return (
    <div className=" footer mt-auto bg-body-tertiary p-5">
      <div className="row">
        <div className="col-md-12 text-start">
          <h2>Get The FreshCart app</h2>
          <p>
            We Will Send You a link ,Open it In Your Phone to Download the app.
          </p>
        </div>
        <div className="col-md-12 d-flex  justify-content-between ">
          <div
            className=" ps-3 py-2"
            style={{
              width: "85%",
            }}
          >
            <input
              placeholder="type your Email..."
              type="text"
              className="form-control mb-3 "
              id="footerEmail"
            />
          </div>
          <div
            className="py-2"
            style={{
              width: "15%",
            }}
          >
            <button className="btn bg-main text-white" type="submit">
              Share App Link
            </button>
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-between text-start px-5 border-bottom  border-top py-3">
          <div className="d-flex pt-2 ">
            <div className="mx-2">
              {" "}
              <p>paymet partners</p>
            </div>
            <div className="">
              {" "}
              <img src={visa} className='visa'/>
              <img src={img2}/>
              <img src={img4}/>
              <img src={img6}/>
              <img src={img7}/>
            </div>
          </div>
          <div className="d-flex  pt-2">
            <div className="mx-2">
              {" "}
              <p>Get deliveries with FreshCart</p>
            </div>
            <div className="mx-2">
              {" "}
              <img src={img5} alt=" " className="mx-2" />
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
