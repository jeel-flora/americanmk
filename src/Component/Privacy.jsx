import { Card, Col, Row } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet-async";

function Privacy() {
  return (
    <>
     <Helmet>
      <title>Privacy Policy - americanmk</title>
    </Helmet>
      <div className="contact">
        <Header />
        <Row className="space d-flex justify-content-between align-items-center mt-5">
          <Col>
            <Card className="contact-card1 ">
              <h2 className="privacy-heading">Privacy Policy</h2>
              <div>
                <p className="contact-p">
                  Welcome to americanmk. Your privacy is important to us.
                  This Privacy Policy outlines how we collect, use, and protect
                  your information when you visit and use our website.
                </p>
                <p className="contact-p">
                  At americanmk, we're passionate about delivering fun,
                  excitement, and entertainment through a wide range of engaging
                  online games. Whether you're a casual gamer or a hardcore fan,
                  we offer something for everyone  from thrilling action and
                  arcade games to relaxing puzzles and strategy challenges.
                </p>
              </div>
              <div className="content mt-5">
              <div className="content-div">
                <h4 className="title">1. Information We Collect</h4>
                <p className="contact-p">
                  We may collect the following types of information:
                </p>
                <ul className="mb-0 d-flex flex-column gap-3">
                  <li className="contact-p">
                    <strong>
                      {" "}
                      Personal Information (only if voluntarily provided):
                    </strong>
                    such as name, email address (e.g., when contacting us).
                  </li>
                  <li className="contact-p">
                    <strong>Non-Personal Information: </strong> browser type,
                    device type, IP address, operating system, pages visited,
                    and session data through cookies and analytics tools.
                  </li>
                </ul>
              </div>
              <div className="content-div">
                <h4 className="title">2. How We Use Your Information</h4>
                <p className="contact-p">We use the collected data to:</p>
                <ul className="mb-0 d-flex flex-column gap-3">
                  <li className="contact-p">
                    Improve the performance and user experience of our website.
                  </li>
                  <li className="contact-p">
                    Respond to your questions, comments, or support requests.
                  </li>
                  <li className="contact-p">
                    Monitor and analyze usage and trends.
                  </li>
                  <li className="contact-p">
                    Maintain the security and integrity of our platform.
                  </li>
                </ul>
              </div>
              <div className="content-div">
                <h4 className="title">3. Cookies</h4>
                <p className="contact-p">
                  We use cookies to enhance your browsing experience. Cookies
                  help us:
                </p>
                <ul className="mb-0 d-flex flex-column gap-3">
                  <li className="contact-p">Remember your preferences.</li>
                  <li className="contact-p">Analyze website traffic.</li>
                  <li className="contact-p">
                    Show relevant content and ads (if applicable).
                  </li>
                </ul>
                <p className="contact-p">
                  You can disable cookies in your browser settings, but some
                  features of our site may not function properly.
                </p>
              </div>

              <div className="content-div">
                <h4 className="title">4. Third-Party Services</h4>
                <p className="contact-p">
                  We may use third-party tools such as Google Analytics or ad
                  networks to understand user behavior or display ads. These
                  tools may collect information as per their own privacy
                  policies.
                </p>
                <p className="contact-p">
                  We do not sell or share your personal information with third
                  parties for marketing purposes.
                </p>
              </div>
               <div className="content-div">
                <h4 className="title">5. Children’s Privacy</h4>
                <p className="contact-p">
                 Our website is intended for users of all ages, including children. However, we do not knowingly collect personal information from children under the age of 13 without parental consent. If you believe we have collected such data, please contact us immediately.
                </p>
              </div>
                <div className="content-div">
                <h4 className="title">6. Data Security</h4>
                <p className="contact-p">
                 We take reasonable measures to protect your data against unauthorized access or disclosure. However, no internet transmission is 100% secure.
                </p>
              </div>
                <div className="content-div">
                <h4 className="title">7. Your Choices</h4>
                <p className="contact-p">
                 You can choose to:
                </p>
                 <ul className="mb-0 d-flex flex-column gap-3">
                  <li className="contact-p">Disable cookies in your browser.</li>
                  <li className="contact-p">Contact us to review or delete your personal data (if any has been collected).</li>
                </ul>
              </div>
                 <div className="content-div">
                <h4 className="title">8. Changes to This Policy</h4>
                <p className="contact-p">
                 We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new “Effective Date.”
                </p>
              </div>
                 <div className="content-div">
                <h4 className="title">9. Contact Us</h4>
                <p className="contact-p">
                 If you have any questions about this Privacy Policy, please contact us at:
                </p>
                 <p className="contact-p">📧 admin@americanmk.com</p>
              </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  );
}

export default Privacy;
