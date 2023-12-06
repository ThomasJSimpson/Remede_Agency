import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroContent from "../components/HeroContent";
import Features from "../components/Features";

export default function WelcomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroContent />
        <Features />
      </main>
      <Footer />
    </>
  );
}
