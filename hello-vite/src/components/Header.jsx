import headerLogo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Logo de la aplicación"
      />
      <h1 className="header__title">¡Hola, Vite!</h1>
    </div>
  );
}

export default Header;
