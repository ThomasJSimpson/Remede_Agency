import { useSelector, useDispatch } from "react-redux";
import { updateInputUsername, updateInputPassword } from "../features/login/loginSlice.js";
import { updateUserToken } from "../features/login/userSlice.js";
import authService from "../services/auth.service.js";

export default function Form() {
  const userName = useSelector((state) => state.loginInput.username);
  const pwd = useSelector((state) => state.loginInput.password);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await authService.getUserLogin(userName, pwd);
      console.log(loginResponse);
      if (loginResponse.data.status === 200) {
        dispatch(updateUserToken({ ...loginResponse.data.body }));
      }
    } catch (err) {
      console.error("Erreur lors de la requête:", err);
    }
  };

  return (
    <section className="sign-in-content">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={(e) => dispatch(updateInputUsername(e.target.value))} value={userName} required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => dispatch(updateInputPassword(e.target.value))} value={pwd} required />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
}
