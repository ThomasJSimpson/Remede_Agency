import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroContent from "../components/HeroContent";
import Features from "../components/Features";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
export default function WelcomePage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/user");
    }
  }, [navigate, isLoggedIn]);
  return !isLoggedIn ? (
    <div className="body-wrapper">
      <NavBar />
      <main>
        <HeroContent />
        <Features />
      </main>
      <Footer />
    </div>
  ) : null;
}
