import { Card, Col, Row } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";
import action from "../../Assets/images/action.svg";
// import ActionGame from "../Game-categoty/ActionGame";
import { gameList } from "../Allgames";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Action() {
  const actionGames = gameList.filter((game) => game.category === "Action");
  return (
    <>
    <Helmet>
      <title>Action Games - Play Online For Free</title>
    </Helmet>
      <div className="contact">
        <Header />

        <Row className="mt-5 space">
          <Col>
            <Card className="contact-card  content" style={{ width: "100%" }}>
              <div className="d-flex  gap-5 action-card">
                <div lg={2} className="">
                  <img src={action} alt="" style={{ width: "130px" }} />
                </div>
                <div lg={9}>
                  <h2 style={{ fontSize: "48px", fontWeight: "700" }}>
                    Action
                  </h2>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "400",
                      color: "#7D818A",
                    }}
                  >
                    Jump into the world of action where every second counts! Our
                    action games are designed to keep you on the edge of your
                    seat with high energy gameplay, powerful weapons, epic
                    battles, and challenging missions. Whether you're taking
                    down enemies, surviving waves of attackers, or proving your
                    skills in a combat arena these games will test your speed,
                    strategy, and reflexes. Perfect for gamers who love thrill
                    and intensity.
                  </p>
                  <p   style={{
                      fontSize: "17px",
                      fontWeight: "400",
                      color: "#7D818A",
                    }}>
                    From explosive battles to heart pounding chases, every action game here delivers an immersive experience that pushes your limits. Feel the adrenaline rush as you explore dynamic environments, unlock new abilities, and rise through increasingly difficult levels. 
                    Each mission brings fresh excitement and opportunities to prove your mastery. Get ready to dive in, dominate your enemies, and become the ultimate action hero!
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="space mt-5">
          {actionGames.map((game) => (
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
            <h2 className="content-title">Explore Action Games</h2>
            <p className="content-p">
              Play the most thrilling action games online only on Crazii
              Games !
            </p>
            <p className="content-p">
              Get into the zone with non stop battles, explosive fights, and
              intense survival missions. Whether you enjoy shooting enemies,
              dodging attacks, or completing high stakes missions, our
              collection of action games brings the heat right to your screen.
            </p>
            <p className="content-p">
              Explore powerful titles that test your reflexes, timing, and
              strategy without any heavy downloads. All action games on americanmk run smoothly on mobile, desktop.
            </p>
            <p className="content-p">
              Gear up for powerful combat, upgrade your weapons, and battle your
              way through endless challenges. Enter the world of action and
              prove you're the ultimate warrior anytime, anywhere.
            </p>
          </Card>
        </Row>
        <Footer />
      </div>
    </>
  );
}

export default Action;
