import { useEffect, useState } from "react";
import arrow from "../Assets/images/arrow.svg";

function Topbutton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 0);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <div className="top-button" onClick={scrollToTop}>
          <img style={{ height: "40px",borderRadius:"10px" }} src={arrow} alt="" />
        </div>
      )}
    </>
  );
}

export default Topbutton;
