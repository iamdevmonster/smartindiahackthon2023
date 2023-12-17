import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import { companiesData } from "../data/data";

import { MdOutlineArrowForward } from "react-icons/md";

import logo_mailchimp from "../assets/images/logo_mailchimp.svg";
import logo_paypal from "../assets/images/logo_paypal.svg";
import logo_sony from "../assets/images/logo_sony.svg";
import logo_stripe from "../assets/images/logo_stripe.svg";
import logo_tinder from "../assets/images/logo_tinder.svg";
import logo_visa from "../assets/images/logo_visa.svg";

export default function BestCompanies() {
  const [isOpen, setOpen] = useState(false);

  const imageContainerStyle = {
    display: 'inline-block',
    margin: '0 10px', // Adjust margin as needed
    width: '160px', // Adjust width as needed
  };

  return (
    <section className="site-section py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 text-center mt-4 mb-5">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <h2 className="section-title mb-2 font-bold">Company We've Helped</h2>
                <p className="lead">Porro error reiciendis commodi beatae omnis similique voluptate rerum ipsam fugit mollitia ipsum facilis expedita tempora suscipit iste</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 col-md-6 text-center" style={imageContainerStyle}>
            <img src={logo_mailchimp} alt="Mailchimp" className="img-fluid logo-1" />
          </div>
          <div className="col-6 col-lg-3 col-md-6 text-center" style={imageContainerStyle}>
            <img src={logo_paypal} alt="Paypal" className="img-fluid logo-2" />
          </div>
          <div className="col-6 col-lg-3 col-md-6 text-center" style={imageContainerStyle}>
            <img src={logo_stripe} alt="Stripe" className="img-fluid logo-3" />
          </div>
          <div className="col-6 col-lg-3 col-md-6 text-center" style={imageContainerStyle}>
            <img src={logo_sony} alt="Sony" className="img-fluid logo-4" />
          </div>
          <div className="col-6 col-lg-3 col-md-6 text-center" style={imageContainerStyle}>
            <img src={logo_tinder} alt="Tinder" className="img-fluid logo-6" />
          </div>
          <div className="col-6 col-lg-3 col-md-6 text-center" style={imageContainerStyle}>
            <img src={logo_visa} alt="Visa" className="img-fluid logo-7" />
          </div>
        </div>
      </div>
    </section>
  );
}
