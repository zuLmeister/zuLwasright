import "./App.css";

function Body() {
  return (
    <div className="badan">
      <a href="#" className="scrolltop" id="scroll-top">
        <i className="bx bx-chevron-up scrolltop__icon"></i>
      </a>

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

      <script src="https://unpkg.com/scrollreveal"></script>

      <script src="keperluan/documentation.js"></script>
    </div>
  );
}

export default Body;
