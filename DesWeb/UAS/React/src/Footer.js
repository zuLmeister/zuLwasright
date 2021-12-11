import "./App.css";

function Awalan() {
  return (
    <div className="badan">
      <footer className="footer section bd-container">
        <div className="footer__container bd-grid">
          <div className="footer__content">
            <img src="keperluan/img/Pandora Green Logo.png" className="img-fluid" />
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Home</h3>
            <ul>
              <li>
                <a href="website.html" className="footer__link">
                  Homepage
                </a>
              </li>
              <li>
                <a href="Logreg.html" className="footer__link">
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Information</h3>
            <ul>
              <li>
                <a href="#" className="footer__link">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Adress</h3>
            <ul>
              <li>Batu Kajang - Paser</li>
              <li>
                Jl.Melon No 182 <span>Batu Kajang PASER, KALIMANTAN TIMUR</span>
              </li>
              <li>+62 813-5155-8177</li>
              <li>
                Email : <span>ArboyGTG@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <script src="https://unpkg.com/scrollreveal"></script>

      <script src="keperluan/documentation.js"></script>
    </div>
  );
}

export default Awalan;
