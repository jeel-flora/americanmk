import { Card, Col, Row } from "react-bootstrap";
import Header from "./Header";
import "../App.css";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
     <Helmet>
      <title>About Us - americanmk</title>
    </Helmet>
      <div className="contact">
        <Header />
        <Row className="space d-flex justify-content-center align-items-center mt-5">
          <Col>
            <Card className="contact-card ">
              <h2 className="contact-heading">About Us</h2>
              <div className="">
                <p className="contact-p">
                  Welcome to americanmk  Your Ultimate Online Gaming
                  Destination!
                </p>
                <p className="contact-p ">
                  At americanmk, we're passionate about delivering fun,
                  excitement, and entertainment through a wide range of engaging
                  online games. Whether you're a casual gamer or a hardcore fan,
                  we offer something for everyone  from thrilling action and
                  arcade games to relaxing puzzles and strategy challenges.
                </p>
              </div>
              <div className="content mt-5">
              <div className="content-div">
                <h4 className="title">🎮 What We Offer</h4>
                <ul className="mb-0 d-flex flex-column gap-3">
                  <li className="contact-p">
                  <strong> Massive Game Collection:</strong>  Explore hundreds of popular and
                    trending games in one place.
                  </li>
                  <li className="contact-p">
                   <strong> Play Instantly:</strong> No downloads, no installs  just click and
                    play.
                  </li>
                  <li className="contact-p">
                  <strong> Free & Accessible: </strong>100% free games that work across all
                    devices.
                  </li>
                  <li className="contact-p">
                  <strong> Regular Updates:</strong> We add new games frequently so you'll never
                    run out of fun.
                  </li>
                  <li className="contact-p">
                  <strong> Kid Friendly & Family Fun:</strong> Safe and enjoyable for all age
                    groups.
                  </li>
                </ul>
              </div>
              <div className="content-div">
                <h4 className="title">❓ Why Choose Us?</h4>
                <ul className="mb-0 d-flex flex-column gap-3">
                  <li className="contact-p">
                  <strong> User Friendly Experience:</strong> Smooth, fast loading games with a sleek, easy to use interface.
                  </li>
                  <li className="contact-p">
                  <strong> Trusted Platform:</strong> Designed with player safety and data privacy in mind.
                  </li>
                  <li className="contact-p">
                  <strong>Passion for Gaming:</strong>  Created by gamers, for gamers  we understand what you love!
                  </li>
                </ul>
              </div>
               <div className="content-div">
                <h4 className="title"> 💡 Our Vision</h4>
               <p className="contact-p">Our mission is to become one of India's most loved online gaming platforms  a place where joy meets technology, and where every user leaves with a smile.</p>
              </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  );
}

export default About;
