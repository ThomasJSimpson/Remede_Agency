import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function SignInPage() {
  return (
    <div className="body-wrapper">
      <NavBar />
      <main class="main bg-dark">
        <Form />
      </main>
      <Footer />
    </div>
  );
}
