import Contact from './Contact'
import affiliates from '../Assets/images/affliate.png'
import { Helmet } from "react-helmet-async";

function Affiliates() {
  return (
    <>
    <Helmet>
    <title>Affiliates - americanmk</title>
    </Helmet>
     <Contact heading="Affiliates Partner" imgSrc={affiliates} />
    </>
  )
}

export default Affiliates
