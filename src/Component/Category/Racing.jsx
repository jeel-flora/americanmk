import { Card, Col, Row } from "react-bootstrap"
import Header from "../Header"
import Footer from "../Footer"
import racing from "../../Assets/images/racing.svg"
import { gameList } from "../Allgames";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Racing() {
  const racingGames = gameList.filter((game) => game.category === "Racing");
  return (
    <>
     <Helmet>
      <title>Racing Games - Play Online For Free</title>
      <meta name="description" content="Choose your ride and hit the track with fast paced, high octane racing challenges."  />
    </Helmet>
      <div className="contact">
        <Header />

        <Row className="mt-5 space">
          <Col>
            <Card className="contact-card  content" style={{ width: "100%" }}>
              <div className="d-flex  gap-5 action-card">
                <div lg={2} className="">
                  <img src={racing} alt="" style={{width:"130px"}}/>
                </div>
                <div lg={9}>
                  <h2 style={{fontSize:"48px",fontWeight:"700"}}>Racing</h2>
                  <p style={{fontSize:"17px",fontWeight:"400",color:"#7D818A"}}>
                   Ready, Set, Go! Our racing games bring high speed excitement right to your fingertips. Choose from supercars, bikes, monster trucks, or even futuristic rides  and race through city streets, dirt tracks, or dangerous highways. With amazing graphics, thrilling sound effects, and multiple levels of difficulty, you'll feel the heat of the competition as you drift, boost, and speed your way to victory.
                  </p>
                  <p style={{fontSize:"17px",fontWeight:"400",color:"#7D818A"}}>
                    Experience the ultimate rush as you take control of the track. Every race is a test of skill, precision, and lightning fast reflexes. Customize your ride, master sharp turns, and unlock powerful upgrades to stay ahead of your rivals. Whether you’re chasing records in time trials or battling opponents in multiplayer mode, our racing games promise nonstop excitement and pure speed thrills for every racing enthusiast.
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="space mt-5">
          {racingGames.map((game) => (
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
        <h2 className="content-title">  Racing Games on americanmk</h2>
        <p className="content-p">
          Speed, drift, and race your way to victory  with the best racing games online at americanmk!
        </p>
        <p className="content-p">
          Choose your ride and hit the track with fast paced, high octane racing challenges. Whether it’s street racing, drag battles, or off road mayhem, we have something for every racer.
        </p>
        <p className="content-p">
        Play instantly across mobile, PC, or  Set Top Box  with no installs, just pure speed. Our racing games are designed for smooth controls, realistic tracks, and heart pounding excitement.
        </p>
        <p className="content-p">
         Unlock new cars, upgrade performance, and dominate the leaderboard. Your next race starts now  only on americanmk.
        </p>
        </Card>
      </Row>
        <Footer />
      </div>
    </>
  )
}

export default Racing
