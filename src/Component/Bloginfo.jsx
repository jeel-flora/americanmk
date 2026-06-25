import Header from "./Header";
import "../App.css";
import { Accordion, Button, Card, Col, Row } from "react-bootstrap";
import "../Style.css";
import Footer from "./Footer";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import layer from "../Assets/images/dark_layer.png";
import { blogData, gameList } from "../Component/Allgames";
// import vector from "../Assets/images/right-arrow.svg";

function Bloginfo() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === Number(id));
  const relatedGame = gameList.find((g) => g.name === blog?.name);
  const navigate = useNavigate();
  // const blog = blogData.find((b) => b.id === id);  // for string id

  if (!blog) return <div>Blog not found</div>;
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
      <div
        style={{
          backgroundImage: `url(${layer}), url(${blog.banner})`,
          width: "100%",
          height: "80vh",
          backgroundSize: "cover, cover",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "center, center",
          color: "white",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
      </div>
      <div>
        <div className="space ">
          <Card className="contact-card" style={{ marginTop: "70px" }}>
            <div className="d-flex flex-column gap-5">
              <div>
                <h1 className="contact-heading">{blog.title} </h1>
                <h3 className="mt-4">Welcome to {blog.name}</h3>
                <div className="d-flex flex-column gap-3">
                  {/* <p className="mt-3 contact-p">Get ready for an exciting adventure with Crazy Birds Attack, the ultimate physics-based puzzle game that will keep you entertained for hours! If you love strategic gameplay mixed with fun and colorful graphics, this game is perfect for you. Launch your feathered friends using a slingshot and take down those mischievous green monsters who have stolen your precious eggs.</p>
          <p className="contact-p">Every level brings new challenges and obstacles that require clever thinking and precise aiming. The game features stunning environments, from peaceful forests to mysterious towers, each designed to test your skills. Whether you're a casual gamer looking for some fun or a puzzle enthusiast seeking a challenge, Crazy Birds Attack offers something special for everyone.</p>
          <p className="contact-p">With intuitive controls and engaging gameplay, you'll find yourself coming back again and again to beat your high scores and unlock new levels. The satisfaction of watching structures collapse and enemies tumble is simply unmatched. </p> */}
                  {blog.intro.map((para, idx) => (
                    <p className="contact-p " key={idx}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h3>🕹️ Game Screenshots</h3>
                {/* <div className="mt-4 d-flex justify-content-center  "  >
              <Row className="">
               
                 {blog.screenshots.map((img, idx) => (
                  <Col lg={6} md={12} key={idx}>
                    <img src={img.src} style={{ width: img.width, height: img.height, objectFit: "cover" }} alt="Screenshot" />
                  </Col>
                ))}
              </Row>
            </div> */}
                <div className="mt-4 d-flex justify-content-center">
                  <Row className="w-100 g-4">
                    {blog.screenshots.map((img, idx) => (
                      <Col
                        lg={6}
                        md={12}
                        key={idx}
                        className="d-flex justify-content-center"
                      >
                        <div
                          style={{
                            width: "100%",
                            maxWidth: "700px",
                            height: "auto",
                            aspectRatio: "16 / 12", // maintain proportional size
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            // borderRadius: "10px",
                          }}
                        >
                          <img
                            src={img.src}
                            alt={`Screenshot ${idx + 1}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain", // 👈 ensures full image is visible without cutting
                            }}
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>

              <div>
                {Array.isArray(blog?.howToPlaySections) &&
                  blog.howToPlaySections.map((section, index) => (
                    <div key={index} className="mb-4">
                      <h3>{section.title}</h3>

                      <div className="d-flex flex-column gap-3">
                        {section.howToPlay?.map((item, idx) => (
                          <p className="contact-p" key={idx}>
                            {item}
                          </p>
                        ))}

                        {section.ul?.map((item, idx) => (
                          <p className="contact-p" key={idx}>
                            {item}
                          </p>
                        ))}

                        {section.dis?.map((item, idx) => (
                          <p className="contact-p" key={idx}>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>

              <div>
                <h3>{blog?.featuresTitle}</h3>
                <div className="d-flex flex-column gap-3">
                  {/* <div className="mt-3">
              <h5>🎯 Realistic Physics Engine</h5>
              <p className="contact-p">Experience authentic gravity and collision mechanics that make every launch feel satisfying. Watch as structures realistically tumble and crash based on real physics principles.</p>
            </div>
             <div>
              <h5>🌟 Multiple Challenging Levels</h5>
              <p>Play through dozens of carefully crafted levels, each with unique layouts and increasing difficulty. Every level offers a new puzzle to solve and challenges to overcome.</p>
            </div>
             <div>
              <h5>🎨 Beautiful Graphics & Smooth Animation</h5>
              <p className="contact-p">Enjoy vibrant, colorful visuals with charming character designs and detailed environments. The game features smooth animations and eye catching effects that bring the action to life.</p>
            </div>
             <div>
              <h5>🏆 Score System & Achievements</h5>
              <p className="contact-p">Compete for the highest scores and unlock achievements as you progress. Challenge yourself to complete levels with perfect three star ratings on every stage.</p>
            </div>
             <div>
              <h5>🎮 Easy Controls</h5>
              <p className="contact-p">Simple and intuitive slingshot mechanics make the game accessible to players of all ages. Just drag, aim, and release  it's that easy to start playing and having fun.</p>
            </div> */}
                  {blog.feature?.map((item, idx) => (
                    <p className="contact-p" key={idx}>
                      {item}
                    </p>
                  ))}
                  {blog.features?.map((feature, idx) => (
                    <div key={idx} className="mt-3">
                      <h5>{feature.title}</h5>
                      <p className="contact-p">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3>{blog?.tipsTitle}</h3>
                <p className="mt-3 contact-p">{blog.tipsub}</p>
                <div className="d-flex flex-column gap-2">
                  {/* <p className="mt-2 contact-p">🎯 Always aim for weak points in structures, like the base or connecting joints, to cause maximum damage with minimum birds.</p>
            <p className="contact-p">🎯 Take your time to study each level before making your first shot. Understanding the layout is half the battle.</p>
            <p className="contact-p">🎯 Don't waste your special birds on easy targets. Save them for tough obstacles that regular birds can't handle.</p>
            <p className="contact-p">🎯 Pay attention to the materials. Stone structures require more force, while wooden ones can be destroyed more easily.</p>
            <p className="contact-p">🎯 Sometimes an indirect approach works better. Try bouncing birds off surfaces or hitting objects to create chain reactions.</p>
            <p className="contact-p">🎯 Replay levels to improve your scores. You might discover new strategies that earn you those precious three stars.</p> */}
                  {blog?.tips?.map((tip, idx) => (
                    // <p className="contact-p" key={idx}>
                    //   {tip}
                    // </p>
                    <a style={{color:"#07b25c"}} href={tip} target="_blank" rel="noopener noreferrer">
                     {tip}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3>{blog?.loveTitle}</h3>
                <div className="d-flex flex-column gap-3">
                  {/* <p className="mt-3 contact-p">Crazy Birds Attack combines the perfect balance of strategy, skill, and pure fun. Unlike many puzzle games that can feel repetitive, each level in this game presents unique challenges that keep the gameplay fresh and exciting. The colorful characters are full of personality, and watching the dramatic destruction unfold never gets old.</p>
            <p className="contact-p">The game is designed to be enjoyed in short bursts or longer gaming sessions, making it perfect for any schedule. Whether you have five minutes waiting for the bus or want to spend an evening conquering multiple worlds, Crazy Birds Attack adapts to your playstyle. The difficulty curve is well-balanced, starting gentle to help new players learn the mechanics before gradually introducing more complex puzzles.</p>
            <p className="contact-p">Best of all, the game is completely free to play! You can enjoy all the core features without spending a penny. The optional ads for extra lives are never intrusive, and the game respects your time and choice as a player.</p> */}
                  {blog?.loveDesc?.map((item, idx) => (
                    <p className="contact-p" key={idx}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h3>{blog?.perfectForTitle}</h3>
                <div className="d-flex flex-column gap-3">
                  {/* <p className="contact-p">Crazy Birds Attack appeals to a wide range of players. Kids love the cute characters and simple controls, while adults appreciate the strategic depth and physics-based challenges. It's a great game for families to enjoy together, as parents can help younger children with tricky levels while older kids can compete for high scores.</p>
            <p className="contact-p">The game also serves as an excellent stress reliever. There's something incredibly satisfying about launching birds and watching elaborate structures collapse. After a long day, nothing beats spending a few minutes causing some harmless digital chaos and achieving those three-star ratings.</p> */}
                  {blog?.perfectFor?.map((item, idx) => (
                    <p className="contact-p" key={idx}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
          {/* <div className="mt-5" style={{ padding: "0px 25px" }}>
                  <h3 style={{ color: "white" }}>Frequently asked questions</h3>

                  <Row className="mt-4 g-3">
                  <Col lg={6} md={12}>
                  <Accordion alwaysOpen={false} >
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Is {blog.name} free to play?</Accordion.Header>
                      <Accordion.Body>
                        Yes, You can play it online for free.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Can I play this game on mobile?</Accordion.Header>
                      <Accordion.Body>
                        Yes, fully supports Android & iPhone browsers.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  </Col>

                  <Col lg={6} md={12}>
                  <Accordion alwaysOpen={false}>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Do I need to sign up For Play?</Accordion.Header>
                      <Accordion.Body>
                        No, Just click and play instantly.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Can I play without download?</Accordion.Header>
                      <Accordion.Body>
                       Yes, Play instantly online on any browser.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  </Col>
                  </Row>
          </div> */}
          {/* <div className="mt-5 bcard-div">
            <Card className="blog-play text-center" style={{ width: "550px" }}>
                <h2 style={{fontWeight:"900"}}>Start Your Adventure Now !</h2>
                  <Button className="b-btn d-flex gap-3 align-items-center mt-3  "
                  onClick={() => {
                  if (relatedGame) {
                  navigate(`/game/${relatedGame.id}`);
                  } else {
                  alert("Game not found for this blog!");
                  }
                  }}>
                    <span className="d-flex align-items-center mb-0 pb-0" style={{ fontSize: "16px", fontWeight: 700 ,textAlign:"center",margin:"0 auto",letterSpacing:"2px"}}>
                      PLAY NOW
                    </span>
                   
                  </Button>
              </Card>
          </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Bloginfo;
