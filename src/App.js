import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Component/HomePage";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Privacy from "./Component/Privacy";
import Affiliates from "./Component/Affiliates";
import Adventure from "./Component/Category/Adventure";
import Action from "./Component/Category/Action";
import Sports from "./Component/Category/Sports";
import Kids from "./Component/Category/Kids";
import Racing from "./Component/Category/Racing";
import GamePlay from "./Component/GamePlay";
import GameInfo from './Component/All-Games/GameInfo'
import Trending from "./Component/Type/Trending";
import Latest from "./Component/Type/Latest";
import Featured from "./Component/Type/Featured";
import Topbutton from "./Component/Topbutton";
import ScrollTop from "./Component/ScrollTop";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import Blog from "./Component/Blog";
import Bloginfo from "./Component/Bloginfo";

function App() {
   const location = useLocation();
   useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
  return (
    <>
    <ScrollTop/>
    <Topbutton/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/privacypolicy" element={<Privacy/>} />
      <Route path="/affiliates" element={<Affiliates/>}/>
      <Route path="/action" element={<Action/>}/>
      <Route path="/sport" element={<Sports/>}/>
      <Route path="/kids" element={<Kids/>}/>
      <Route path="/racing" element={<Racing/>}/>
      <Route path="/adventure" element={<Adventure/>}/>
      <Route path="/game/:gameId" element={<GameInfo />} />
      <Route path="/game/:gameId/play" element={<GamePlay />} />
      <Route path="/trending" element={<Trending/>}/>
      <Route path="/latest" element={<Latest/>}/>
      <Route path="/featured" element={<Featured/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/bloginfo/:id" element={<Bloginfo/>}/>


    </Routes>
    </>
  );
}

export default App;
