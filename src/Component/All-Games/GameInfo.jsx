import { Button, Card, Col, Row } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";
import playbutton from "../../Assets/images/play-button.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { gameList } from "../Allgames";
import layer from "../../Assets/images/dark_layer.png";
import { Helmet } from "react-helmet-async";

function GameInfo() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = gameList.find((g) => g.id === gameId);

  //  const relatedGames = gameList.filter(
  //   (g) => g.category === game.category && g.id !== game.id
  // );
  const relatedGames = [];
  const seen = new Set();

  gameList.forEach((g) => {
    if (g.category === game.category && g.id !== game.id && !seen.has(g.name)) {
      relatedGames.push(g);
      seen.add(g.name);
    }
  });

  return (
    <>
      <Helmet key={gameId}>
        <title>{game.name} - Play Online Free on americanmk </title>
        <meta name="description" content={game.description} />
        <meta property="og:title" content={game.name} />
        <meta property="og:description" content={game.description} />
        <meta property="og:image" content={game.banner} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="">
        {/* <div
          className="subway position-relative"
          style={{
            background: `url(${layer}), url(${game.banner})`,
            width: "100%",
            height: "80vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            color: "white",
          }}
        > */}
        <div
          className="subway position-relative"
          style={{
            backgroundImage: `url(${layer}), url(${game.banner})`,
            width: "100%",
            height: "80vh",
            backgroundSize: "cover, cover",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "center, center",
            color: "white",
          }}
        >
          <Header />

          <div
            className="d-flex align-items-center gap-4 position-absolute space icon-div"
            style={{ paddingLeft: "13px" }}
          >
            <div>
              <img src={game.img} className="game-img" alt="" />
            </div>
            <div>
              <h2 className="banner-h1">{game.name}</h2>
              <p className="game-p">{game.description}</p>
              <Button
                className="btn nav-btn d-flex align-items-center gap-2 justify-content-center game-btn"
                style={{ borderRadius: "100px" }}
                onClick={() => navigate(`/game/${game.id}/play`)}
              >
                <span
                  className="btn-text"
                  style={{ fontSize: "20px", fontWeight: 600 }}
                >
                  Play Now
                </span>
                <span>
                  <img src={playbutton} alt="" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* <AdventureGame /> */}

        <Row className="space mt-5">
          {/* {relatedGames.map((relatedGame, index) => (
                <Col key={game.id} className="mt-4" lg={2} md={4} sm={6} xs={6}>
              <Link to={`/game/${relatedGame.id}`} className="text-decoration-none">
                <div className="game-card">
                  <img src={relatedGame.img} alt={relatedGame.name} />
                  <div className="game-overlay">
                    <span className="game-title">{game.name}</span>
                  </div>
                </div>
              </Link>
            </Col>
                ))} */}
          {relatedGames.map((relatedGame, index) => (
            <Col
              key={relatedGame.id}
              className="mt-4"
              lg={2}
              md={4}
              sm={6}
              xs={6}
            >
              <Link
                to={`/game/${relatedGame.id}`}
                className="text-decoration-none"
              >
                <div className="game-card">
                  <img src={relatedGame.img} alt={relatedGame.name} />
                  <div className="game-overlay">
                    {/* <span className="game-title">{relatedGame.name}</span> */}
                    {relatedGame.name.length > 20 ? (
                      <marquee direction="left" scrollamount="4">
                        <span className="game-title">{relatedGame.name}</span>
                      </marquee>
                    ) : (
                      <span className="game-title">{relatedGame.name}</span>
                    )}
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>

        <Row className="space d-flex justify-content-between align-items-center mt-5">
          <Col>
            {/* <Card className="contact-card1 content">
            <h2 className="privacy-heading"> {game.name} About Us</h2>
            <div className="content-div">
              <h4 className="title">1. What is '{game.name}' ?</h4>
              <p className="contact-p">{game.description}</p>
            </div>
            <div className="content-div">
              <h4 className="title">2. Gameplay</h4>
              <p className="contact-p">{game.category}</p>
            </div>
          </Card> */}
            <Card className="contact-card1 content">
              <h1 className="privacy-heading"> {game.about.heading}</h1>

              {game.about?.sections.map((section, idx) => (
                <div className="content-div" key={idx}>
                  <h2 className="title">{section.title}</h2>
                  <p className="contact-p">{section.content}</p>
                </div>
              ))}
              {game.about.extraContent?.map((extra, i) => (
                <div className="content-div mt-3" key={`extra-${i}`}>
                  <h3 className="title">{extra.title}</h3>
                  {extra.content && (
                    <p className="contact-p">{extra.content}</p>
                  )}

                  {/* If list exists, map it */}
                  {extra.list && (
                    <ul className="contact-list contact-p">
                      {extra.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {game.about.gameplay.map((gameplay, idx) => (
                <div className="content-div" key={idx}>
                  <h2 className="title">{gameplay.title}</h2>
                  <p className="contact-p">{gameplay.content}</p>
                </div>
              ))}

              <h2 style={{ color: "#07b25c" }}>Key Features</h2>

              {game.about?.features.map((feature, idx) => (
                <div className="content-div" key={`feature-${idx}`}>
                  <h4 className="title">{feature.title}</h4>
                  <p className="contact-p">{feature.content}</p>
                </div>
              ))}
            </Card>
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  );
}

export default GameInfo;
