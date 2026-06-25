import { Col, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../Assets/images/American MK Logo.png";
// import LinkedIn from '../Assets/images/LinkedIn.svg'
import insta from '../Assets/images/Instagram.svg'
import facebook from '../Assets/images/Facebook.svg'
// import whatsapp from '../Assets/images/WhatsApp.svg'
import email from '../Assets/images/f-email.svg'
import twitter from '../Assets/images/twitter.svg'
import "./Footer.css";

function Footer() {
   const location = useLocation();
  const navigate = useNavigate();

  // const handleHomeClick = (e) => {
  //   if (location.pathname === "/") {
  //     e.preventDefault(); // stop navigation
  //     // window.scrollTo({ top: 0, behavior: "smooth" });
  //      window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "instant"
  //   });
  //   } else {
  //     navigate("/");
  //   }
  // };

  const handleLinkClick = (e, path) => {
  if (location.pathname === path) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  } else {
    navigate(path);
  }
};
  return (
    <>
      <div className="footer ">
        <div className="" style={{padding:"0px 20px"}}>
          <Row>
            <div className="d-flex  justify-content-around flex-wrap text-center text-sm-start gap-3 gap-md-3 gap-sm-0 ">
              <Col lg={4} md={12} sm={12}>
                <div className="footer-logo">
                  <Link to="/" onClick={(e) => handleLinkClick(e, "/")}>
                    <img src={logo} alt="americanmk Logo" style={{ height: "70px" }} />
                  </Link>
                  <p className="mt-4 p" style={{ fontSize: "14px" }}>
                    Enjoy the largest collection of trending online games on a smooth, user friendly <br /> platform. Play across all devices for fun, relaxation, and stress relief. Simply open your <br /> game, start playing instantly, and enjoy nonstop entertainment anytime, anywhere.
                  </p>
                   {/* <div className="mb-3 d-flex gap-3 mx-auto">
                    <div className="social-div">
                      <Link
                        to="https://www.facebook.com/profile.php?id=61589051350653"
                        className=""
                        target="blank"
                      > 
                        <img src={facebook} alt="" />
                      </Link>
                    </div>
                    <div className="social-div">
                      <Link
                        to="https://www.instagram.com/americanmk/"
                        className=""
                         target="blank"
                      >
                        <img src={insta} alt="" />
                      </Link>
                    </div>
                    <div className="social-div">
                      <Link
                        to="https://x.com/wikipediah5game"
                        className=""
                         target="blank"
                      >
                        <img src={twitter} alt="" />
                      </Link>
                    </div>
                     <div className="social-div">
                      <a href="mailto:admin@americanmk.com">
                        <img src={email} alt="" />
                      </a>
                    </div>
                  </div>  */}
                </div>
              </Col>
              
              <div>
                <h4 className="heading">Resources</h4>
                <ul className="mt">
                  <div className="d-flex flex-column gap">
                    <li>
                      <Link to="/" className="footer-link"  onClick={(e) => handleLinkClick(e, "/")}>
                       Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="footer-link" onClick={(e) => handleLinkClick(e, "/blog")}>
                      Blogs
                      </Link>
                    </li>
                    <li>
                      <Link to="/affiliates" className="footer-link"onClick={(e) => handleLinkClick(e, "/affiliates")} >
                        Affiliates
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
              <div>
                <h4 className="heading">Game Zone</h4>
                <ul className="mt">
                  <div className="d-flex flex-column gap">
                    <li>
                      <Link to="/latest" className="footer-link"  onClick={(e) => handleLinkClick(e, "/latest")}>
                        Latest
                      </Link>
                    </li>
                    <li>
                      <Link to="/trending" className="footer-link" onClick={(e) => handleLinkClick(e, "/trending")}>
                       Trending
                      </Link>
                    </li>
                    <li>
                      <Link to="/featured" className="footer-link" onClick={(e) => handleLinkClick(e, "/featured")}>
                        Featured
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
              <div>
                <h4 className="heading ">Contact Info</h4>
                <ul className="mt">
                  <div className="d-flex flex-column gap">
                    <li>
                      <Link to="/about" className="footer-link" onClick={(e) => handleLinkClick(e, "/about")}>
                     About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="footer-link" onClick={(e) => handleLinkClick(e, "/contact")}>
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacypolicy" className="footer-link" onClick={(e) => handleLinkClick(e, "/privacypolicy")}>
                      Privacy Policy
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          <hr className="container mt-5" />
          </Row>

          <div>
            <p className="text-center p-2 p mb-3">
              americanmk © 2026. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
