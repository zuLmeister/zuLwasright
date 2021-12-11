import "./App.css";

function About() {
  return (
    <div className="badan">
      <a href="#" className="scrolltop" id="scroll-top">
        <i className="bx bx-chevron-up scrolltop__icon"></i>
      </a>

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

        

      <script src="https://unpkg.com/scrollreveal"></script>

      <script src="keperluan/documentation.js"></script>
    </div>
  );
}

export default About;
