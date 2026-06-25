import { Card, Col, Row } from "react-bootstrap";
import Footer from "../Footer";
import Header from "../Header";
import sport from "../../Assets/images/sport.svg";
import { gameList } from "../Allgames";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Sports() {
  const sportsGames = gameList.filter((game) => game.category === "Sports");
  return (
    <>
     <Helmet>
          <title>Sports Games - Play Online For Free</title>
           <meta name="description" content=" Play top-rated sports games instantly no installation needed."  />
        </Helmet>
      <div className="contact">
        <Header />

        <Row className="mt-5 space">
          <Col>
            <Card className="contact-card  content" style={{ width: "100%" }}>
              <div className="d-flex  gap-5 action-card">
                <div lg={2} className="">
                  <img src={sport} alt="" style={{ width: "130px" }} />
                </div>
                <div lg={9}>
                  <h2 style={{ fontSize: "48px", fontWeight: "700" }}>
                    Sports
                  </h2>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "400",
                      color: "#7D818A",
                    }}
                  >
                    Experience the excitement of your favorite sports like never
                    before! From cricket and football to basketball, tennis, and
                    more our sports games offer realistic gameplay, smooth
                    controls, and competitive challenges. Whether you're playing
                    solo or challenging friends, feel the rush of scoring goals,
                    hitting sixes, or winning championships. These games are a
                    perfect blend of skill, teamwork, and strategy for every
                    sports fan.
                  </p>
                  <p  style={{
                      fontSize: "17px",
                      fontWeight: "400",
                      color: "#7D818A",
                    }}>
                    Step onto the virtual field and experience the thrill of competition from anywhere! Our collection of sports games lets you train, compete, and celebrate victory like a true champion. Master precision timing, sharpen your reflexes, and take on global opponents in realistic tournaments. Whether you’re chasing 
                    records or perfecting your gameplay, every match brings new excitement, teamwork, and the spirit of real sportsmanship.
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="space mt-5">
          {sportsGames.map((game) => (
            <Col key={game.id} className="mt-4" lg={2} md={4} sm={6} xs={6}>
              <Link to={`/game/${game.id}`} className="text-decoration-none">
                <div className="game-card">
                  <img src={game.img} alt={game.name} />
                  <div className="game-overlay">
                    {/* <span className="game-title">{game.name}</span> */}
                    {game.name.length > 20 ? (
                      <marquee direction="left" scrollamount="4">
                        <span className="game-title">{game.name}</span>
                      </marquee>
                    ) : (
                      <span className="game-title">{game.name}</span>
                    )}
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>

        <Row className="space mt-5 text-white">
          <Card className="contact-card mt-4 content" style={{ width: "100%" }}>
            <h2 className="content-title"> Sports Games on americanmk</h2>
            <p className="content-p">
              Step into the game with the best sports experiences online  only
              on americanmk !
            </p>
            <p className="content-p">
              Whether you're a cricket lover, football fan, basketball pro, or
              tennis champ, our wide range of online sports games brings the
              real thrill of the field right to your fingertips.
            </p>
            <p className="content-p">
              Play top rated sports games instantly no installation needed. With
              smooth gameplay across mobile, desktop, and  Set Top Box, you
              can enjoy non stop sporting action with just an internet
              connection.
            </p>
            <p className="content-p">
              From classic hits to new age sports challenges, compete against AI
              or global players and climb the leaderboards. Feel the spirit of
              competition anytime, anywhere with americanmk.
            </p>
          </Card>
        </Row>
        <Footer />
      </div>
    </>
  );
}

export default Sports;
