import Header from "./Header";
import "../App.css";
import { Button, Col, Row } from "react-bootstrap";
// import gamebanner from "../Assets/images/Frame 7204.png";
import action from "../Assets/images/action.svg";
import sport from "../Assets/images/sport.svg";
import kids from "../Assets/images/kids.svg";
import racing from "../Assets/images/racing.svg";
import adventure from "../Assets/images/adventure.svg";
import { gameList } from "../Component/Allgames";
import "../Style.css";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import vector from "../Assets/images/Vector.svg";
import { Helmet } from "react-helmet-async";

function HomePage() {
  const navigate = useNavigate();
  const filteredGames = gameList.filter(game => game.hasOwnProperty('bannerimg'));
  return (
    <>
     <Helmet>
            <title>Free Online Games at americanmk ! Play Now!</title>
             <meta name="description"content="Play the latest online games for free on americanmk. Enjoy action, adventure, puzzle, and more with no downloads. Start playing instantly!"/>
            {/* <meta name="description" content={game.description} />
            <meta property="og:title" content={game.name} />
            <meta property="og:description" content={game.description} />
            <meta property="og:image" content={game.banner} />
            <meta name="twitter:card" content="summary_large_image" /> */}
          </Helmet>
      <div className="main">
        <Header />
        <Row
          className="space1 d-flex justify-content-between align-items-center card-div"
          style={{ padding: "185px 0px 90px 0px" }}
          // style={{padding: "11% 0px 4%"}}
        >
          <Col lg={5} md={12} sm={12}>
            <div className="d-flex flex-column" style={{ gap: "20px" }}>
              <h1 className="banner-h1">
                PLAY YOUR{" "}
                <span
                  style={{ color: "#00E471", fontFamily: "BigNoodleTitling" }}
                >
                  {" "}
                  TRENDING{" "}
                </span>
                GAMES <br /> and enjoy instantly
              </h1>
              <p className="banner-p">
                Play trending games instantly with smooth experience. <br /> Just tap
                and 
                enjoy nonstop fun anytime, anywhere you go.
              </p>
              {/* <Button className="btn nav-btn explore-btn " onClick={() => navigate("/trending")}>
                <span style={{fontSize:"20px",fontWeight:500}} >Explore</span> <span><img className="arrow-wrapper" src={vector} alt="" style={{width:"18px"}} /></span>
              </Button> */}
              <Button
                className="btn nav-btn explore-btn"
                onClick={() => navigate("/trending")}
              >
                <span style={{ fontSize: "20px", fontWeight: 500 }}>
                  Explore
                </span>
                <span className="arrow-wrapper">
                  <span className="arrow-bg">
                    <img className="arrow-icon" src={vector} alt="arrow" />
                  </span>
                </span>
              </Button>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="text-end px-0 banner-img-div gap-4 d-flex justify-content-end align-items-center">
           {filteredGames.map((game) => (
             // <Col key={game.id} className="mt-4" lg={2} md={4} sm={6} xs={6}>
            <div key={game.id} >
              <Link to={`/game/${game.id}`} className="text-decoration-none">
                <div className="game-card2"  style={{ boxShadow: `${game.shadowpx || '0px'} ${game.shadowColor}` }}>
                  <img src={game.bannerimg} alt={game.name} />
                  <div className="overlay">
                    {/* <Button className="card-btn">Play now</Button> */}
                    <img src={game.playbutton} style={{height:`${game.buttonsize}`, width:`${game.buttonsize}`}} alt="" />
                  </div>
                </div>
              </Link>
              </div>
            // </Col>
          ))}
          </Col>
        </Row>
        <Row className="space d-flex gap-5 justify-content-between cat-button ">
          <Col xl={2} lg={3} md={5} sm={12} className="">
            <Button
              className="btn banner-btn"
              onClick={() => {
                navigate("/action");
              }}
            >
              <span>
                <img
                  src={action}
                  alt="Play action games free online"
                  className="btn-img"
                  style={{ height: "39px" }}
                />
              </span>
              <span className="btn-font">Action</span>
            </Button>
          </Col>
          <Col xl={2} lg={3} md={5} sm={12} className="">
            <Button
              className="btn banner-btn"
              onClick={() => {
                navigate("/sport");
              }}
            >
              <span>
                <img
                  src={sport}
                  className="btn-img"
                  style={{ height: "39px" }}
                  alt="Enjoy sports games online free"
                />
              </span>
              <span className="btn-font">Sports</span>
            </Button>
          </Col>
          <Col xl={2} lg={3} md={5} sm={12} className="">
            <Button
              className="btn banner-btn"
              onClick={() => {
                navigate("/kids");
              }}
            >
              <span>
                <img
                  src={kids}
                  className="btn-img"
                  alt="Free online kids games"
                  style={{ height: "39px" }}
                />
              </span>
              <span className="btn-font">Kids Area</span>
            </Button>
          </Col>
          <Col xl={2} lg={3} md={5} sm={12} className="">
            <Button
              className="btn banner-btn"
              onClick={() => {
                navigate("/racing");
              }}
            >
              <span>
                <img
                  src={racing}
                  className="btn-img"
                  alt="play racing games online free"
                  style={{ height: "39px" }}
                />
              </span>
              <span className="btn-font">Racing </span>
            </Button>
          </Col>
          <Col xl={2} lg={3} md={5} sm={12}>
            <Button
              className="btn banner-btn "
              onClick={() => {
                navigate("/adventure");
              }}
            >
              <span>
                <img
                  src={adventure}
                  className="btn-img"
                  alt="free online adventure games"
                  style={{ height: "39px" }}
                />
              </span>
              <span className="btn-font">Adventure</span>
            </Button>
          </Col>
        </Row>
          <Row className="space mt-4">
          {gameList.map((game) => (
            <Col key={game.id} className="mt-4" lg={2} md={4} sm={6} xs={6}>
              <Link to={`/game/${game.id}`} className="text-decoration-none">
                <div className="game-card">
                  <img src={game.img} alt={game.name} />
                  <div className="game-overlay">
                    {/* <marquee  direction="left">  <span className="game-title" style={{ '--text-length': game.name.length }}>{game.name}</span></marquee> */}
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
       
           {/* <Row> */}
      <div >
        {/* <Row className="space">
          {gameImages.map((game, index) => (
            <Col className="mt-4 " lg={2} md={4} sm={6} xs={6}>
              <Link to={game.path} className="text-decoration-none">
                <div className="game-card " key={index}>
                  <img src={game.img} alt={game.name} />
                  <div className="game-overlay">
                    <span className="game-title">{game.name}</span>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row> */}
      

        <Footer />
      </div>
     
        {/* </Row> */}
      </div>

    </>
  );
}

export default HomePage;
