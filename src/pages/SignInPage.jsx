import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function SignInPage() {
  return (
    <>
      <NavBar />
      <main class="main bg-dark">
        <Form />
      </main>
      <Footer />
    </>
  );
}
