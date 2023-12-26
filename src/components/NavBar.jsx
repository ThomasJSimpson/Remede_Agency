import { Link } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.png";
import { logOut } from "../features/login/userSlice";
import { useSelector, useDispatch } from "react-redux";

export default function NavBar() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleLog = () => {
    if (isLoggedIn) {
      dispatch(logOut());
    }
  };
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <Link to={`${isLoggedIn ? "/" : "/sign-in"}`} onClick={handleLog}>
        <p className="fa fa-user-circle">{`Sign ${isLoggedIn ? "Out" : "In"}`}</p>
      </Link>
    </nav>
  );
}
