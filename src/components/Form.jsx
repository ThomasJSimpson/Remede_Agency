import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInputUsername, updateInputPassword } from "../features/login/loginSlice.js";
import { stateUserToken } from "../features/login/userSlice.js";
import authService from "../services/auth.service.js";

export default function Form() {
  const userName = useSelector((state) => state.loginInput.username);
  const pwd = useSelector((state) => state.loginInput.password);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [redirectToProfil, setRedirectToProfil] = useState(false);
  // const LOGIN_URL = "http://localhost:3001/api/v1/user/login";
  // const PROFIL_URL = "http://localhost:3001/api/v1/user/profile";
  // Toujours connecté? check isAuthentificated status
  // si oui --> token tjs valide? send token to check response from api
  // oui ? redirection profil
  // non ? nécessite envoi form
  // si non ? nécessite envoi form

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await authService.getUserLogin(userName, pwd);
      console.log(loginResponse);
      if (loginResponse.data.body.token) {
        dispatch(stateUserToken({ ...loginResponse.data.body }));
        setRedirectToProfil(true);
      }

      // const profilResponse = await authService.getUserProfil(loginResponse);
      // console.log(profilResponse);
      // // dispatch(userLoaded({ ...profilResponse.data.body }));
      // dispatch(updateUserInfo({ ...profilResponse.data.body }));
    } catch (err) {
      console.error("Erreur lors de la requête:", err);
    }
    // try {
    //   const response = await axios.post(LOGIN_URL, { email: user, password: pwd });
    //   console.log("Réponse du serveur:", response.data);

    //   let token;
    //   if (response.data.status === 200) {
    //     token = await response.data.body.token;
    //     localStorage.setItem("token", JSON.stringify(token));
    //   }
    //   const data = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };
    //   const tokenResponse = await axios.post(PROFIL_URL, null, data);
    //   if (tokenResponse.data.status === 200) {
    //     dispatch(userLoaded({ ...tokenResponse.data.body }));
    //     dispatch(updateProfil({ ...tokenResponse.data.body }));
    //     localStorage.setItem("user", JSON.stringify(tokenResponse.data.body));
    //   }
    //   setRedirectToProfil(true);
    // } catch (err) {
    //   console.error("Erreur lors de la requête:", err);
    // }
  };
  if (redirectToProfil) {
    return <Navigate to="/user" />;
  }
  return (
    <section className="sign-in-content">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        {/* <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={(e) => setUser(e.target.value)} value={user} required />
        </div> */}
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={(e) => dispatch(updateInputUsername(e.target.value))} value={userName} required />
        </div>
        {/* <div className="input-wrapper">
          <input type="text" value={user.email} />
          <input type="text" value={user.firstName} />
          <input type="text" value={user.lastName} />
        </div> */}
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => dispatch(updateInputPassword(e.target.value))} value={pwd} required />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* <Link to={"/user"}> */}
        <button className="sign-in-button">Sign In</button>
        {/* </Link> */}
      </form>
    </section>
  );
}
