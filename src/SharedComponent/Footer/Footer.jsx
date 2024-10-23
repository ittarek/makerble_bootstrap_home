import "./Footer.css"

const Footer = () => {
    return (
      <footer className="border-top border-danger border-5 ">
        <div className="px-3 pt-3">
          <div className="footer-top ">
            <div className="row bg-white">
              {/* row 1 */}
              <div className="col-md-6 col-lg-2 about-footer bg-white">
                <h3>Makerble </h3>
                <ul>
                  <li>
                    <a href="tel:(010) 1234 4321">
                      <i className="fas fa-phone fa-flip-horizontal"></i>(010)
                      1234 4321
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    1 / 105 Bay Lights,
                    <br />
                    Lorem Ipsum,
                    <br />
                    LIC 3201
                  </li>
                </ul>
              </div>

              {/* row 2 Organizations */}
              <div className="col-md-6 col-lg-2 page-more-info bg-white">
                <div className="footer-title">
                  <h4>Organizations</h4>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Testimonial</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>

              {/* row 3 your account */}
              <div className="col-md-6 col-lg-2 page-more-info bg-white">
                <div className="footer-title">
                  <h4>Your account</h4>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Testimonial</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              {/* row 4 e explore */}
              <div className="col-md-6 col-lg-2 page-more-info bg-white">
                <div className="footer-title">
                  <h4>Explore</h4>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Testimonial</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>

              {/* row 5 icon */}

              <div className="footer-title col-md-6 col-lg-4 open-hours bg-white">
                <h4>Follow The Makerble story</h4>
                <ul className="footer-social">
                  <li>
                    <a href="" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>   <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12">
                        <p className="copyright">Copyright © 2024 <a href="#">Tariqul</a>.</p>
                    </div></div>
        </div>
      </footer>
    );
};

export default Footer;