import facebook from "./imagenes/facebook.svg";
import twitter from "./imagenes/twitter.svg";
import instagram from "./imagenes/instagram.svg";
import linkedin from "./imagenes/linkedin.svg";
import skoLogo from "./imagenes/sko.png";
import "./css/footer.css";
import { useNavigate } from "react-router-dom";

function Pie() {
  const navigate = useNavigate();

  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-row">
          <div className="contenedor-logo">
            <img className="sko" src={skoLogo} alt="" onClick={() => navigate("/home")} />
          </div>
          <div class="footer-links">
            <h4>Contactanos</h4>
            <ul>
              <li>
                <a href="#">tienda.sko@gmail.com</a>
              </li>
              <li>
                <a href="#">+54 11 12345678</a>
              </li>
              <li>
                <a href="#">Lima 749, CABA</a>
              </li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Nuestas Redes</h4>
            <div class="social-link">
              <a href="#">
                <img class="facebook-icon" src={facebook} alt="" />
              </a>
              <a href="#">
                <img class="twitter-icon" src={twitter} alt="" />
              </a>
              <a href="#">
                <img class="instagram-icon" src={instagram} alt="" />
              </a>
              <a href="#">
                <img class="linkedin-icon" src={linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Pie;
