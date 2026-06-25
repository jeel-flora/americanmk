// import { useEffect, useState } from "react";
// import { Button, Offcanvas } from "react-bootstrap";
// import Navtoggle from "../Assets/images/nav-toggle.svg";
// import "./Header.css";
// import logo from "../Assets/images/Logo.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// function Header() {
//    const location = useLocation();
//   const isActive = (path) => {
//     return location.pathname === path;
//   };
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         // Adjust threshold (e.g., 10px)
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   const navigate = useNavigate();
//   return (
//     <div
//       className="header "
//       style={{ backgroundColor: isScrolled ? "white" : "black" }}
//     >
//       <div className="container">
//         <div
//           className=" align-items-center navbar "
//           style={{ padding: isScrolled ? "15px 0px" : "10px 0px" }}
//         >
//             <div className="d-flex justify-content-between align-items-center">
//           <div className=" logo-container">
//           <Link to="/" > <img
//               src={logo}
//               alt="Logo"
//               className="logo-img"
//             /></Link> 
//           </div>
//           <div className=" d-none d-lg-flex">
//             <ul className="d-flex align-items-center m-0 p-0">
//               <li>
//                 <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services" className={`nav-link ${isActive("/services") ? "active" : ""}`}>
//                   Privacy Policy
//                 </Link>
//               </li>
//               {/* <li><Link to="/contact" className="nav-link">Contact Us</Link></li> */}
              
//             </ul>
//           </div>
//           <div className="">
//             <Button
//                 className="btn nav-btn"
//                 onClick={() => {
//                   navigate("/contact");
//                 }}
//               >
//                 <span> Affiliates</span>
//               </Button>
//           </div>
//           </div>

//           <div className="col-2 col-md-1 d-lg-none d-flex flex-column  navbar">
//             <img
//               src={Navtoggle}
//               alt="Menu Icon"
//               onClick={handleShow}
//               style={{ cursor: "pointer", height: "25px" }}
//             />
//           </div>

//           <Offcanvas show={show} onHide={handleClose}>
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title></Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <ul className="d-flex flex-column justify-content-between m-0 p-0">
//                 <li>
//                   <Link to="/" className="nav-link" >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/about" className="nav-link">
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/services"  className="nav-link">
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 {/* <li>
//                   <Link to="/contact" className="nav-link">
//                     Contact Us
//                   </Link>
//                 </li> */}
//                 <Button
//                 className="btn nav-btn"
//                 onClick={() => {
//                   navigate("/contact");
//                 }}
//               >
//                 <span>Affiliates</span>
//               </Button>
//               </ul>
//             </Offcanvas.Body>
//           </Offcanvas>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;


// import { useEffect, useState } from "react";
// import { Button, Offcanvas } from "react-bootstrap";
// import Navtoggle from "../Assets/images/nav-toggle.svg";
// import "./Header.css";
// import logo from "../Assets/images/Logo.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// function Header() {
//   const location = useLocation();
//   const isActive = (path) => {
//     return location.pathname === path;
//   };
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
 
//   const navigate = useNavigate();
  
//   return (
//     <div className="header" >
//       <div className="space">
//         <div className="align-items-center navbar" style={{ padding: "15px 0px" }}>
//           <div className="d-flex justify-content-between align-items-center w-100">
//             <div className="logo-container">
//               <Link to="/" className="logo-text">
//                <img src={logo} alt="Logo" className="logo-img" /></Link>
//             </div>
            
//             <div className="d-none d-lg-flex align-items-center">
//               <ul className="d-flex align-items-center m-0 p-0">
//                 <li>
//                   <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/privacypolicy" className={`nav-link ${isActive("/privacy") ? "active" : ""}`}>
//                     Privacy Policy
//                   </Link>
//                 </li>
//               </ul>
              
              
//             </div>
//             <div className=" d-none d-lg-block">
//             <Button
//                 className="btn nav-btn ms-4"
//                 onClick={() => {
//                   navigate("/affiliates");
//                 }}
//               >
//                 <span>Affiliates</span>
//               </Button>
//               </div>

//             <div className="col-2 col-md-1 d-lg-none d-flex flex-column navbar">
//               <img
//                 src={Navtoggle}
//                 alt="Menu Icon"
//                 onClick={handleShow}
//                 style={{ cursor: "pointer", height: "25px" }}
//               />
//             </div>
//           </div>

//           <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: '#111317', color: 'white' }}>
//             <Offcanvas.Header closeButton closeVariant="white">
//               <Offcanvas.Title ></Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <ul className="d-flex flex-column justify-content-between m-0 p-0">
//                 <li>
//                   <Link to="/" className="nav-link" onClick={handleClose}>
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/about" className="nav-link" onClick={handleClose}>
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/contact" className="nav-link" onClick={handleClose}>
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/privacypolicy" className="nav-link" onClick={handleClose}>
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <Button
//                   className="btn nav-btn mt-3"
//                   onClick={() => {
//                     navigate("/affiliates");
//                     handleClose();
//                   }}
//                 >
//                   <span>Affiliates</span>
//                 </Button>
//               </ul>
//             </Offcanvas.Body>
//           </Offcanvas>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
import { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import Navtoggle from "../Assets/images/nav-toggle.svg";
import "./Header.css";
import logo from "../Assets/images/American MK Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [show, setShow] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  //  const handleHomeClick = (e) => {
  //   if (location.pathname === "/") {
  //     e.preventDefault();
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

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll Down
        setShowHeader(false);
      } else {
        // Scroll Up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`header ${showHeader ? "show" : "hide"}`}>
      <div className="space">
        <div className="align-items-center navbar" style={{ padding: "15px 0px" }}>
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="logo-container">
              <Link to="/" className="logo-text" onClick={(e) => handleLinkClick(e, "/")}>
                <img src={logo} alt="americanmk Logo" className="logo-img" />
              </Link>
            </div>

            <div className="d-none d-lg-flex align-items-center">
              <ul className="d-flex align-items-center m-0 p-0">
                <li className="pb-0">
                  <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "/")}>Home</Link>
                </li>
                <li className="pb-0">
                  <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "/about")}>About Us</Link>
                </li>
                 <li className="pb-0">
                  <Link to="/blog" className={`nav-link ${isActive("/blog") ? "active" : ""}`}  onClick={(e) => handleLinkClick(e, "/blog")}>Blogs</Link>
                </li>
                <li className="pb-0">
                  <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}onClick={(e) => handleLinkClick(e, "/contact")}>Contact Us</Link>
                </li>
                <li className="pb-0">
                  <Link to="/privacypolicy" className={`nav-link ${isActive("/privacypolicy") ? "active" : ""}`}  onClick={(e) => handleLinkClick(e, "/privacypolicy")}>Privacy Policy</Link>
                </li>
                
              </ul>
            </div>

            <div className="d-none d-lg-block">
              <Button className="btn nav-btn ms-4 " onClick={(e) => handleLinkClick(e, "/affiliates")} style={{borderRadius:"100px"}} >
                <span style={{fontSize:"18px",fontWeight:500}}>Affiliates</span>
              </Button>
            </div>

            <div className=" col-md-1 d-lg-none d-flex flex-column navbar">
              <img
                src={Navtoggle}
                alt="Menu Icon"
                onClick={handleShow}
                style={{ cursor: "pointer", height: "25px" }}
              />
            </div>
          </div>

          <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: '#111317', color: 'white' }}>
            <Offcanvas.Header closeButton closeVariant="white" />
            <Offcanvas.Body className="text-center">
              <ul className="d-flex flex-column justify-content-between m-0 p-0">
                <li><Link to="/" className="nav-link"  onClick={(e) => {  handleLinkClick(e, "/"); handleClose(); }} >Home</Link></li>
                <li><Link to="/about" className="nav-link" onClick={(e) =>{ handleLinkClick(e, "/about"); handleClose();}}>About Us</Link></li>
                <li><Link to="/blog" className="nav-link" onClick={(e) =>{ handleLinkClick(e, "/blog"); handleClose();}}>Blogs</Link></li>
                <li><Link to="/contact" className="nav-link" onClick={(e) => {handleLinkClick(e, "/contact"); handleClose();}}>Contact Us</Link></li>
                <li><Link to="/privacypolicy" className="nav-link" onClick={(e) =>{ handleLinkClick(e, "/privacypolicy"); handleClose();}}>Privacy Policy</Link></li>
                <Button className="btn nav-btn mt-3 mx-auto" onClick={(e) => {handleLinkClick(e, "/affiliates");handleClose();}}>
                  <span>Affiliates</span>
                </Button>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
}

export default Header;
