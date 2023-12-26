import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function SignInPage() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.isLoggedIn) {
      navigate("/user");
    }
  }, [navigate, user]);
  return (
    <div className="body-wrapper">
      <NavBar />
      <main className="main bg-dark">
        <Form />
      </main>
      <Footer />
    </div>
  );
}
