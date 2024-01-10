import { Link } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.png";
import { logOut } from "../features/login/userSlice";
import { useSelector, useDispatch } from "react-redux";
import UserCircle from "../assets/fa-user-circle";
import SignOutIcon from "../assets/fa-sign-out";

export default function NavBar() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const firstName = useSelector((state) => state.user.firstName);
  const dispatch = useDispatch();
  const userIcon = UserCircle();
  const signOutIcon = SignOutIcon();

  const handleLog = () => {
    if (isLoggedIn) {
      dispatch(logOut());
    }
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={"/"}>
        <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="main-nav-items">
        {isLoggedIn ? (
          <Link className="main-nav-item" to={"/user"}>
            <p>
              {userIcon} {firstName}
            </p>
          </Link>
        ) : null}
        <Link className="main-nav-item" to={`${isLoggedIn ? "/" : "/sign-in"}`} onClick={handleLog}>
          <p>
            {isLoggedIn ? signOutIcon : userIcon}
            {` Sign ${isLoggedIn ? "Out" : "In"}`}
          </p>
        </Link>
      </div>
    </nav>
  );
}
