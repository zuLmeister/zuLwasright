import "./App.css";
import {Link} from 'react-router-dom'
function Body() {
  return (
    <div className="badan">
      <a href="#" className="scrolltop" id="scroll-top">
        <i className="bx bx-chevron-up scrolltop__icon"></i>
      </a>

      <main className="l-main">
        <section className="home" id="home">
          <div className="hcontainer bd-container bd-grid">
            <div className="home__data">
              <h1 className="home__title">Pandora</h1>
              <h2 className="home__subtitle">
                Join us to make the <br />
                <span>WORLD</span> becomes a <span>BETTER</span> place
              </h2>
              <Link className="button" to="/Login">
                Join Us
              </Link>
            </div>
            <img src="keperluan/img/fix.png" alt="" className="home__img" />
          </div>
        </section>

        <section className="about section bd-container" id="about">
          <div className="about__container bd-grid">
            <div className="about__data">
              <span className="section-subtitle about_in">About us</span>
              <h2 className="section-title about_in">
                <span>
                  Action Speak Louder <br />
                  Than Words
                </span>
              </h2>
              <p className="about__description">We are a community that helps the world for a better live. Together, we determine the future we dream of.</p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="button">
                {" "}
                More About Us ?{" "}
              </a>
            </div>

            <img src="keperluan/img/3.jpg" alt="" className="about__img" />
          </div>
        </section>

        <section className="services section bd-container" id="services">
          <span className="section-subtitle">Offering</span>
          <h2 className="section-title">
            <span>Our amazing services</span>
          </h2>

          <div className="services__container bd-grid">
            <div className="services__content">
              <h3 className="services__title">Campaign Page</h3>
              <p className="services__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, ipsum imperdiet volutpat scelerisque, nisi odio mollis ex, efficitur molestie velit ligula ut justo. Etiam venenatis commodo diam, sit amet.
              </p>
            </div>
            <div className="services__content">
              <h3 className="services__title">E-Certificate</h3>
              <p className="services__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, ipsum imperdiet volutpat scelerisque, nisi odio mollis ex, efficitur molestie velit ligula ut justo. Etiam venenatis commodo diam, sit amet.
              </p>
            </div>

            <div className="services__content">
              <h3 className="services__title">Contribution</h3>
              <p className="services__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, ipsum imperdiet volutpat scelerisque, nisi odio mollis ex, efficitur molestie velit ligula ut justo. Etiam venenatis commodo diam, sit amet.
              </p>
            </div>
          </div>
        </section>

        <section className="contact section bd-container" id="contact">
          <div className="contact__container bd-grid">
            <div className="contact__data">
              <span className="section-subtitle contact_in">Let's talk</span>
              <h2 className="section-title contact_in">
                <span>Contact us</span>
              </h2>
              <p className="contact__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, ipsum imperdiet volutpat scelerisque, nisi odio mollis ex, efficitur molestie velit ligula ut justo. Etiam venenatis commodo diam, sit amet.
              </p>
            </div>

            <div className="contact__button">
              <a href="#" className="button">
                Contact us now
              </a>
            </div>
          </div>
        </section>
      </main>

      <script src="https://unpkg.com/scrollreveal"></script>

      <script src="keperluan/documentation.js"></script>
    </div>
  );
}

export default Body;
