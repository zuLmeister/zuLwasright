import "./App.css";

function Body() {
  return (
    <div className="badan">
      <a href="#" className="scrolltop" id="scroll-top">
        <i className="bx bx-chevron-up scrolltop__icon"></i>
      </a>

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

      <script src="https://unpkg.com/scrollreveal"></script>

      <script src="keperluan/documentation.js"></script>
    </div>
  );
}

export default Body;
