import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 meta-data">
            <div>
            <h4>
                  <img src="images/logo.png" alt="" /> PABONDI
                </h4>
                <ul>
                  <li>
                  Kamwala, Lusaka Zambia
                  </li>
                  <li>KRS: 737482398332</li>
                  <li>NIP: 235253647373</li>
                </ul>
              
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h4>Resources</h4>
              <ul>
                <li>Real Estate Guides</li>
                <li>Buying Process</li>
                <li>Selling Process</li>
                <li>Investment Tips</li>
                <li>FAQs</li>
                <li>Newsletters</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h4>Legal</h4>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Disclosures</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h4>Connect with Us</h4>
              <div className="connect-icons">
                <div>
                    <img src="images/mail.png" alt="" />
                </div>
                <div>
                    <img src="images/whatsapp.png" alt="" />
                </div>
                <div>
                    <img src="images/telephone-call.png" alt="" />
                </div>
                <div>
                    <img src="images/world-wide-web.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
            <p>Copyrights © 2024 <span>PABONDI</span></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
