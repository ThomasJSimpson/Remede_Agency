import { Link } from "react-router-dom";

export default function Form() {
  return (
    <section class="sign-in-content">
      <h1>Sign In</h1>
      <form>
        <div class="input-wrapper">
          <label for="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div class="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div class="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>
        <Link to={"/user"}>
          <button class="sign-in-button">Sign In</button>
        </Link>
      </form>
    </section>
  );
}
