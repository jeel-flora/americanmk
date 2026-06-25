import { Card, Col, Row } from "react-bootstrap"
import Header from "../Header"
import Footer from "../Footer"
import adventure from "../../Assets/images/adventure.svg"
import { gameList } from "../Allgames";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Adventure() {
  
    const adventureGames = gameList.filter((game) => game.category === "Adventure");
  return (
    <>
     <Helmet>
      <title>Adventure Games - Play Online For Free</title>
      <meta name="description" content="Our adventure games are full of immersive stories, puzzles, and creative challenges that will keep you hooked."  />
    </Helmet>
       <div className="contact">
        <Header />

        <Row className="mt-5 space">
          <Col>
            <Card className="contact-card  content" style={{ width: "100%" }}>
              <div className="d-flex  gap-5 action-card">
                <div lg={2} className="">
                  <img src={adventure} alt="" style={{width:"130px"}}/>
                </div>
                <div lg={9}>
                  <h2 style={{fontSize:"48px",fontWeight:"700"}}>Adventure</h2>
                  <p style={{fontSize:"17px",fontWeight:"400",color:"#7D818A"}}>
                   Explore mysterious lands, solve tricky puzzles, and uncover hidden treasures. Our adventure games take you on unforgettable journeys filled with storytelling, challenges, and magical moments. Whether you're escaping a jungle, rescuing friends, or traveling through fantasy worlds, each game offers a unique and immersive experience that keeps you coming back for more.
                  </p>
                  <p style={{fontSize:"17px",fontWeight:"400",color:"#7D818A"}}>
                    Embark on epic quests where every choice shapes your destiny. Our adventure games blend exploration, mystery, and excitement to keep you hooked from start to finish. Discover breathtaking worlds, interact with fascinating characters, and overcome daring obstacles along the way. Whether you’re searching for hidden treasures or solving ancient mysteries, these games promise endless fun and unforgettable adventures at every turn.
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        
        <Row className="space mt-5">
          {adventureGames.map((game) => (
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
        <h2 className="content-title">Adventure Games on americanmk</h2>
        <p className="content-p">
         Begin your epic journey now with the most exciting adventure games online only at americanmk!
        </p>
        <p className="content-p">
        Explore hidden temples, solve mysteries, escape danger, and uncover lost worlds. Our adventure games are full of immersive stories, puzzles, and creative challenges that will keep you hooked.
        </p>
        <p className="content-p">
         Play directly from your browser or app no need for large downloads. Whether you're on mobile, PC, or your  Set Top Box, your adventure is just a click away.
        </p>
        <p className="content-p">
         Dive into fantasy lands or survive in wild terrains  every game is a new journey waiting to be explored on americanmk.
        </p>
        </Card>
      </Row>
        <Footer />
      </div>
    </>
  )
}

export default Adventure
