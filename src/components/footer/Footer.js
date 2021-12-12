import React from "react";
import "../footer/_footer.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4 id="h4-1">Company</h4>
              <ul className="list-unstyled">
                <li>About us</li>
                <li>Our Services</li>
                <li>Privacy policy</li>
                <li>Affiliate program</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4 id="h4-2">Get Help</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">shipping</a>
                </li>
                <li>
                  <a href="/">returns</a>
                </li>
                <li>
                  <a href="/">payment options</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4 id="h4-3">Online Shop</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">watch</a>
                </li>
                <li>
                  <a href="/">bag</a>
                </li>
                <li>
                  <a href="/">shoes</a>
                </li>
                <li>
                  <a href="/">dress</a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4 id="h4-4">Follow me</h4>
              <div className="social-links">
                <ul className="list-unstyled">
                  <a
                    id="instagram"
                    href="https://www.instagram.com/vitor.diamantino/"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    id="linkedin"
                    href="https://www.linkedin.com/in/vitordiamantino/"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a id="twitch" href="https://www.twitch.tv/vitor_diamantino">
                    <i class="fab fa-twitch"></i>
                  </a>
                  <a
                    id="facebook"
                    href="https://www.facebook.com/vitor.diamantino"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} City Guide App - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;