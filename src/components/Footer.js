import React from "react";

const Footer = () => {
  return (
    <div className="footer container">

      {/* First section */}
      <div className="footer-section">
        <p className="footer-title">FoodiesHub.com</p>
        <p className="footer-typography">FoodiesHub is a placce where you can please your soul and tummy with delicious food recepies of all cusine. And our service is absolutely free.</p>
        <p className="copyright">© 2021 | All Rights Reserved</p>
      </div>

      {/* Second section */}
      <div className="footer-section">
        <p className="footer-title">Contact Us</p>
        <p className="footer-email">foodieshub@gmail.com</p>
        <p className="footer-phone">+342-5324-9454</p>
        <p className="footer-address">2393 Street NYC</p>
      </div>

      {/* Third section */}
      <div className="footer-section">
        <p className="footer-title">Socials</p>
        <p className="footer-media">Facebook</p>
        <p className="footer-media">Twitter</p>
        <p className="footer-media">Instagram</p>
      </div>
    </div>
  )
}

export default Footer