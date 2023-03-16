import compra from "../../assets/images/compra.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import brandlive from "../../assets/images/brandlive.jpg";
import "./Footer.scss";
export function Footer() {
  return (
    <footer className="footer__container">
      <section className="footer__wrapper">
        <article className="footer__article">
          <h2>Pufi</h2>
        </article>
        <article className="footer__article">
          <p>PUFI RAIN</p>
          <p>PUFI PUFF</p>
          <p>PUFI CART</p>
          <p>PUFI NAP</p>
        </article>
        <article className="footer__article">
          <p>CONTACTO</p>
          <p>AYUDA</p>
          <p>COMO COMPRAR</p>
          <p>TERMINOS & CONDICIONES</p>
        </article>
        <article className="footer__article">
          <p>COMPRA 100% SEGURA</p>
          <img src={compra} alt="compra" />
        </article>
        <article className="footer__article">
          <p>
            SEGUINOS EN
            <img src={facebook} alt="icon-facebook" />
            <img src={instagram} alt="icon-instagram" />
            <img src={twitter} alt="icon-twitter" />
          </p>
        </article>
      </section>
      <section>
        <article className="footer__article-pie">
          <p>PUFI Copyright 2017 - Todos los derechos reservados </p>
          <img src={brandlive} alt="brandlive" />
        </article>
      </section>
    </footer>
  );
}
