import { Card, Col, Row } from "react-bootstrap"
import Header from "../Header"
import Footer from "../Footer"
import { gameList } from "../../Component/Allgames";
import { Link } from "react-router-dom";
import fratured from '../../Assets/images/fuatured.png';
import { Helmet } from "react-helmet-async";

function Featured() {
     const featuredGames = gameList.filter((game) => game.type === "Featured");
  return (
    <>
     <Helmet>
      <title>Featured Games - Play Online For Free</title>
      <meta name="description" content=" Handpicked just for you our Featured Games are the best of the best! These games are specially selected for their quality, popularity, and entertainment value."  />
    </Helmet>
      <div className="contact">
        <Header />

        <Row className="mt-5 space">
          <Col>
            <Card className="contact-card  content" style={{ width: "100%" }}>
              <div className="d-flex align-items-center gap-5 action-card">
                <div lg={2} className="">
                  <img src={fratured} alt="Enjoy Featured game free online" style={{width:"130px"}}/>
                </div>
                <div lg={9}>
                  <h2 style={{fontSize:"48px",fontWeight:"700"}}>Featured Games</h2>
                  <p style={{fontSize:"17px",fontWeight:"400",color:"#7D818A"}}>
                   Handpicked just for you our Featured Games are the best of the best! These games are specially selected for their quality, popularity, and entertainment value. Whether you're a casual gamer or a seasoned pro, this collection showcases must-try experiences that stand out from the crowd. Dive into our top recommendations now!
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        
        <Row className="space mt-5">
          {featuredGames.map((game) => (
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

          {/* <Row className="space mt-5 text-white">
         <Card className="contact-card  content" style={{ width: "100%" }}>
        <h2 className="content-title">Adventure Games on americanmk</h2>
        <p className="content-p">
         Begin your epic journey now with the most exciting adventure games online — only at americanmk!
        </p>
        <p className="content-p">
        Explore hidden temples, solve mysteries, escape danger, and uncover lost worlds. Our adventure games are full of immersive stories, puzzles, and creative challenges that will keep you hooked.
        </p>
        <p className="content-p">
         Play directly from your browser or app — no need for large downloads. Whether you're on mobile, PC, or your Set-Top Box, your adventure is just a click away.
        </p>
        <p className="content-p">
         Dive into fantasy lands or survive in wild terrains — every game is a new journey waiting to be explored on americanmk.
        </p>
        </Card>
      </Row> */}
        <Footer />
      </div>
    </>
  )
}

export default Featured
