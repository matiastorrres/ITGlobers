import "./Header.scss";
import puff from "../../assets/images/puff.png";
import rain from "../../assets/images/rain.png";
import cart from "../../assets/images/cart.png";
import nap from "../../assets/images/nap.png";
import { ButtonSection } from "../ButtonSection/ButtonSection";
import { Button } from "../Button/Button";
export const Header = () => {
  return (
    <header className="header__wrapper">
      <div className="header__container">
        <h1 className="">Pufi</h1>
        <article>
          <ButtonSection title={"PUFI PUFF"} description={"puff"} img={puff} />
          <ButtonSection title={"PUFI RAIN"} description={"rain"} img={rain} />
          <ButtonSection title={"PUFI CART"} description={"cart"} img={cart} />
          <ButtonSection title={"PUFI NAP"} description={"nap"} img={nap} />
        </article>
        <article className="header__buttons">
          <Button title={"MI CUENTA v"} />
          <Button title={"MI COMPRA"} />
        </article>
      </div>
    </header>
  );
};
