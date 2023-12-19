import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInputUsername, updateInputPassword } from "../features/login/loginSlice.js";
import { updateProfil } from "../features/login/profilSlice.js";
import axios from "axios";

// import axios from "../api/axios.js";

export default function Form() {
  const user = useSelector((state) => state.login.username);
  const pwd = useSelector((state) => state.login.password);

  const profil = useSelector((state) => state.profil);
  const dispatch = useDispatch();
  const [redirectToProfil, setRedirectToProfil] = useState(false);
  const LOGIN_URL = "http://localhost:3001/api/v1/user/login";
  const PROFIL_URL = "http://localhost:3001/api/v1/user/profile";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, { email: user, password: pwd });

      console.log("Réponse du serveur:", response.data);

      const token = await response?.data?.body?.token;

      const data = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const tokenResponse = await axios.post(PROFIL_URL, null, data);

      if (tokenResponse.data.status === 200) {
        dispatch(updateProfil({ ...tokenResponse.data.body }));
      }
      setRedirectToProfil(true);
    } catch (err) {
      console.error("Erreur lors de la requête:", err);
    }
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
          <input type="text" id="username" onChange={(e) => dispatch(updateInputUsername(e.target.value))} value={user} required />
        </div>
        <div className="input-wrapper">
          <input type="text" value={profil.email} />
          <input type="text" value={profil.firstName} />
          <input type="text" value={profil.lastName} />
        </div>
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
