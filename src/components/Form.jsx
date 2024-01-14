import { useSelector, useDispatch } from "react-redux";
import { updateInputUsername, updateInputPassword, resetInputs, setLoginFailed } from "../features/loginSlice.js";
import { updateUserToken, setRememberMe } from "../features/userSlice.js";
import authService from "../services/authService.js";
import UserCircleIcon from "../assets/fa-user-circle.js";

export default function Form() {
  const userName = useSelector((state) => state.loginInput.username);
  const pwd = useSelector((state) => state.loginInput.password);
  const isLoginFailed = useSelector((state) => state.loginInput.isLoginFailed);
  const isRemembered = useSelector((state) => state.user.isRemembered);
  const dispatch = useDispatch();
  const userIcon = UserCircleIcon();

  const handleRememberMeChange = (e) => {
    dispatch(setRememberMe(e.target.checked));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await authService.getUserLogin(userName, pwd);
      if (loginResponse.data.status === 200) {
        const user = {
          token: loginResponse.data.body.token,
          isLoggedIn: true,
          isRemembered,
        };
        isRemembered ? localStorage.setItem("user", JSON.stringify(user)) : sessionStorage.setItem("user", JSON.stringify(user));
        dispatch(updateUserToken({ ...loginResponse.data.body }));
        dispatch(resetInputs());
      }
    } catch (err) {
      console.error("Erreur lors de la requête:", err.response.data.message);
      dispatch(setLoginFailed(true));
    }
  };

  return (
    <section className="sign-in-content">
      {userIcon}
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        {isLoginFailed ? <p className="error-message">La connexion a échouée, nom d'utilisateur ou/et mot de passe incorrect</p> : null}
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={(e) => dispatch(updateInputUsername(e.target.value))} value={userName} required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => dispatch(updateInputPassword(e.target.value))} value={pwd} required />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" checked={isRemembered} onChange={handleRememberMeChange} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
}
