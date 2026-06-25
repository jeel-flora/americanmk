import { Card, Col, Row } from "react-bootstrap"
import Header from "../Header"
import Footer from "../Footer"
import kids from "../../Assets/images/kids.svg"
import { gameList } from "../Allgames";
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async";

function Kids() {
    const kidsGames = gameList.filter((game) => game.category === "Kids");
  return (
    <>
     <Helmet>
      <title>Kids Games - Play Online For Free</title>
      <meta name="description" content="Discover colorful, exciting games that are perfect for children of all ages."  />
    </Helmet>
     <div className="contact">
        <Header />

        <Row className="mt-5 space">
          <Col>
            <Card className="contact-card  content" style={{ width: "100%" }}>
              <div className="d-flex  gap-5 action-card">
                <div lg={2} className="">
                  <img src={kids} alt="" style={{width:"130px"}}/>
                </div>
                <div lg={9}>
                  <h2 style={{fontSize:"48px",fontWeight:"700"}}>Kids</h2>
                  <p style={{fontSize:"17px",fontWeight:"400",color:"#7D818A"}}>
                    Welcome to a fun and friendly world built just for kids. Our kids games are full of bright colors, playful music, and easy to learn gameplay. Whether it's solving puzzles, dressing up characters, or enjoying fun adventures each game is crafted to entertain while encouraging learning and creativity. These games are 100% safe, age appropriate, and perfect for young minds.
                  </p>
                  <p style={{fontSize:"17px",fontWeight:"400",color:"#7D818A"}}>Let your little ones explore, imagine, and learn through play. Our kids games are designed to spark creativity, boost problem solving skills, and provide endless hours of cheerful entertainment. From magical adventures to educational challenges, every game is filled with laughter and discovery. Safe, simple, and full of joy  it’s the perfect digital playground where fun and learning go hand in hand!</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

          <Row className="space mt-5">
          {kidsGames.map((game) => (
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
        <h2 className="content-title">Kids Games on americanmk</h2>
        <p className="content-p">
         Fun, friendly, and full of learning  welcome to the world of kids games on americanmk!
        </p>
        <p className="content-p">
        Discover colorful, exciting games that are perfect for children of all ages. Our kids games are designed to entertain and educate  with puzzles, memory games, adventures, and creative fun.
        </p>
        <p className="content-p">
         All our games are safe, simple, and easy to play  no downloads or setup needed. Whether your child is playing on a phone, tablet, computer, or  Set-Top Box, they’ll enjoy hours of learning based entertainment.
        </p>
        <p className="content-p">
        Join friendly characters, explore magical worlds, and develop early learning skills  all through play, only on americanmk.
        </p>
        </Card>
      </Row>
        <Footer />
      </div>
    </>
  )
}

export default Kids
