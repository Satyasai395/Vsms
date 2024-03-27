import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-content contract">
            <h3>Contact Us</h3>
            <ul className="list">
              <li>
                <p>Email:contact@vcubegroup.com</p>
              </li>
              <li>
                <p>
                  Phone:+91 7675070124 <br />
                  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +91
                  9059456742
                </p>
              </li>
              <li>
                <p>
                  Address:2nd Floor Above Raymond’s
                  <br />
                  Clothing Store KPHB,Phase-1,
                  <br /> Kukatpally, Hyderabad​
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h3>Quick Links</h3>
            <ul className="list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Courses</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h3>Other Pages</h3>
            <ul className="list">
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/">Important Questions</a>
              </li>
            </ul>
          </div>

          <div className="map">
            <h3>Find us Here</h3>
            <iframe
              title="Location Map"
              height="270px"
              width="350px"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=V%20CUBE%20Software%20Solutions%20PVT.%20LTD,%202nd%20Floor,%20above%20Raymond's%20Clothing%20Store,%20K%20P%20H%20B%20Phase%201,%20Kukatpally,%20Hyderabad,%20Telangana%20500072+(Job%20Paortal)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Population calculator map
              </a>
            </iframe>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
