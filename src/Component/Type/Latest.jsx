import { Card, Col, Row } from "react-bootstrap"
import Header from "../Header"
import Footer from "../Footer"
import { gameList } from "../../Component/Allgames";
import { Link } from "react-router-dom"
import latest from '../../Assets/images/latest.png'
import { Helmet } from "react-helmet-async";
function Latest() {
    const latestGames = gameList.filter((game) => game.type === "Latest");
  return (
    <>
     <Helmet>
      <title>Latest Games - Play Online For Free</title>
      <meta name="description" content="Stay ahead of the curve with our Latest Games collection.you’ll find all the most recent additions here."  />
    </Helmet>
      <div className="contact">
        <Header />

        <Row className="mt-5 space">
          <Col>
            <Card className="contact-card  content" style={{ width: "100%" }}>
              <div className="d-flex align-items-center gap-5 action-card">
                <div lg={2} className="Latest Game online free">
                  <img src={latest} alt="" style={{width:"130px"}}/>
                </div>
                <div lg={9}>
                  <h2 style={{fontSize:"48px",fontWeight:"700"}}>Latest Games</h2>
                  <p style={{fontSize:"17px",fontWeight:"400",color:"#7D818A"}}>
                   Stay ahead of the curve with our Latest Games collection. Whether it’s a newly launched arcade challenge, a fresh racing thrill, or an exciting new puzzle, you’ll find all the most recent additions here. We regularly update this section so you never run out of something new and exciting to explore. Play the newest releases first!
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        
        <Row className="space mt-5">
          {latestGames.map((game) => (
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

export default Latest
