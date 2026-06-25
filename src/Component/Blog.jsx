import Header from "./Header";
import "../App.css";
import { Button, Card, Col, Row } from "react-bootstrap";
// import { gameList } from "../Component/Allgames";
import "../Style.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import vector from "../Assets/images/Vector.svg";
import { Helmet } from "react-helmet-async";
import { blogData } from "../Component/Allgames";


function Blog() {
  const navigate = useNavigate();
  // const filteredGames = gameList.filter((game) =>
  //   game.hasOwnProperty("bannerimg")
  // );
  return (
    <>
      <Helmet>
        <title>Free Online Games at americanmk-Play Now!</title>
        <meta
          name="description"
          content="Play the latest online games for free on americanmk. Enjoy action, adventure, puzzle, and more with no downloads. Start playing instantly!"
        />
        {/* <meta name="description" content={game.description} />
            <meta property="og:title" content={game.name} />
            <meta property="og:description" content={game.description} />
            <meta property="og:image" content={game.banner} />
            <meta name="twitter:card" content="summary_large_image" /> */}
      </Helmet>
      <div className="blog">
        <Header />

        <h1 className="blog-name">BLOGS</h1>
      </div>
      <div>
        <div className="space mt-5">
          {/* <Row className="d-flex justify-content-center" >
            <div className=" mt-1" style={{marginBottom:'55px'}}>
            <p className="mb-0 b-heading" style={{ color: "white",textAlign:"center" }}>
                BEST TRANDIN GAMES FOR STRATAGY LOVERS
            </p>
            </div>
            
            <Col lg={5} md={12} sm={12}>
              <div>
                <Card className="blog-card" onClick={() => navigate("/bloginfo")}>
                  <img src={angrybird} className="card-img" alt="" />
                  <div className="card-content">
                    <h1 className="mb-3 blog-heading">Launch birds, smash pigs, and save the eggs!</h1>
                    <p className="mb-3 blog-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ipsum doloremque in corporis, iste quidem, et numquam asperiores culpa minus odit, unde sequi. Nihil molestiae sit ducimus optio omnis, necessitatibus ipsa quod deleniti numquam. Unde labore quo ullam ut id eos, quos rerum, repudiandae, beatae minus esse voluptatibus voluptatum aliquid!</p>
                    <Button className="blog-btn d-flex gap-2 align-items-center" onClick={() => navigate("/trending")} >
                <span style={{ fontSize: "16px", fontWeight: 500 }}>
                  Explore More
                </span>
                <span className="arrow-wrapper">
                  <span className="arrow-bg">
                    <img className="" style={{height:'16px',width:"16px"}} src={vector} alt="arrow" />
                  </span>
                </span>
              </Button>
                  </div>
                </Card>
              </div>
            </Col>
            <Col lg={5} md={12} sm={12}>
              <div>
                <Card className="blog-card">
                  <img src={subway} className="card-img" alt="" />
                  <div className="card-content">
                    <h1 className="mb-3 blog-heading">Launch birds, smash pigs, and save the eggs!</h1>
                    <p className="mb-3 blog-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ipsum doloremque in corporis, iste quidem, et numquam asperiores culpa minus odit, unde sequi. Nihil molestiae sit ducimus optio omnis, necessitatibus ipsa quod deleniti numquam. Unde labore quo ullam ut id eos, quos rerum, repudiandae, beatae minus esse voluptatibus voluptatum aliquid!</p>
                    <Button className="blog-btn d-flex gap-2 align-items-center" onClick={() => navigate("/trending")} >
                <span style={{ fontSize: "16px", fontWeight: 500 }}>
                  Explore More
                </span>
                <span className="arrow-wrapper">
                  <span className="arrow-bg">
                    <img className="" style={{height:'16px',width:"16px"}} src={vector} alt="arrow" />
                  </span>
                </span>
              </Button>
                  </div>
                  </Card>
              </div>
            </Col>
            
          </Row>
          <Row className="mt-4 d-flex justify-content-center ">
             <Col lg={5} md={12} sm={12}>
              <div>
                <Card className="blog-card">
                  <img src={bubbleshooter} className="card-img" alt="" />
                  <div className="card-content">
                    <h1 className="mb-3 blog-heading">Launch birds, smash pigs, and save the eggs!</h1>
                    <p className="mb-3 blog-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ipsum doloremque in corporis, iste quidem, et numquam asperiores culpa minus odit, unde sequi. Nihil molestiae sit ducimus optio omnis, necessitatibus ipsa quod deleniti numquam. Unde labore quo ullam ut id eos, quos rerum, repudiandae, beatae minus esse voluptatibus voluptatum aliquid!</p>
                    <Button className="blog-btn d-flex gap-2 align-items-center" onClick={() => navigate("/trending")} >
                <span style={{ fontSize: "16px", fontWeight: 500 }}>
                  Explore More
                </span>
                <span className="arrow-wrapper">
                  <span className="arrow-bg">
                    <img className="" style={{height:'16px',width:"16px"}} src={vector} alt="arrow" />
                  </span>
                </span>
              </Button>
                  </div>
                  </Card>
              </div>
            </Col>
             <Col lg={5} md={12} sm={12}>
              <div>
                <Card className="blog-card">
                  <img src={wormate} className="card-img" alt="" />
                   <div className="card-content">
                    <h1 className="mb-3 blog-heading">Launch birds, smash pigs, and save the eggs!</h1>
                    <p className="mb-3 blog-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ipsum doloremque in corporis, iste quidem, et numquam asperiores culpa minus odit, unde sequi. Nihil molestiae sit ducimus optio omnis, necessitatibus ipsa quod deleniti numquam. Unde labore quo ullam ut id eos, quos rerum, repudiandae, beatae minus esse voluptatibus voluptatum aliquid!</p>
                    <Button className="blog-btn d-flex gap-2 align-items-center" onClick={() => navigate("/trending")} >
                <span style={{ fontSize: "16px", fontWeight: 500 }}>
                  Explore More
                </span>
                <span className="arrow-wrapper">
                  <span className="arrow-bg">
                    <img className="" style={{height:'16px',width:"16px"}} src={vector} alt="arrow" />
                  </span>
                </span>
              </Button>
                  </div>
                  </Card>
              </div>
            </Col>
          </Row> */}
           <Row className="d-flex justify-content-center">
            <div className=" mt-1" style={{marginBottom:'55px'}}>
            <p className="mb-0 b-heading" style={{ color: "white",textAlign:"center" }}>
                BEST TRENDING GAMES FOR STRATEGY LOVERS
            </p>
            </div>
          {blogData.map((item) => (
            <Col key={item.id} lg={5} md={12} sm={12} className="mb-4">
              <Card
                className="blog-card"
                onClick={() => navigate(`/bloginfo/${item.id}`)}
              >
                <img src={item.banner} className="card-img" alt={item.title} />
                <div className="card-content">
                  <h1 className="mb-3 blog-heading">{item.title}</h1>
                  <p className="mb-3 blog-p">{item.shortDesc}</p>
                  <Button className="blog-btn d-flex gap-2 align-items-center">
                    <span style={{ fontSize: "16px", fontWeight: 500 }}>
                      Explore More
                    </span>
                    <span className="arrow-wrapper">
                      <span className="arrow-bg">
                        <img
                          style={{ height: "16px", width: "16px" }}
                          src={vector}
                          alt="arrow"
                        />
                      </span>
                    </span>
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
