import React from "react";
import "../footer/_footer.scss"

const Footer = () => {
  return (
      <div className="footer">
        <div className="footer-middle">        
          <div className="container"> 
            <div className="row">
              {/* Column 1 */}
              <div className="col-md-3 col-sm-6">
                <h4 id="h4-1">lorem ipsum</h4>
                <ul className="list-unstyled">
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
              {/* Column 2 */}
              <div className="col-md-3 col-sm-6">
                <h4 id="h4-2">lorem ipsum</h4>
                <ul className="list-unstyled">
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                </ul>
              </div>
              {/* Column 3 */}
              <div className="col-md-3 col-sm-6">
                <h4 id="h4-3">lorem ipsum</h4>
                <ul className="list-unstyled">
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                </ul>
              </div>
              {/* Column 4 */}
              <div className="col-md-3 col-sm-6">
                <h4 id="h4-4">lorem ipsum</h4>
                <ul className="list-unstyled">
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                <li><a href="/">Lorem ipsum</a></li>
                </ul>
              </div>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
  )
  
};

export default Footer;