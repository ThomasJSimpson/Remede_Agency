import { Link } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.png";

export default function NavBar() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <Link className="main-nav-item" to={"/sign-in"}>
        <p className="fa fa-user-circle">Sign In</p>
      </Link>
    </nav>
  );
}
