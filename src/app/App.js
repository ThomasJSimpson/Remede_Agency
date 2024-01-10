import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcomepage from "../pages/WelcomePage.jsx";
import SignIn from "../pages/SignInPage.jsx";
import UserPage from "../pages/UserPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcomepage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
}

export default App;
