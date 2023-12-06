import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeaderProfil from "../components/HeaderProfil";
import Account from "../components/Account";
export default function UserPage() {
  return (
    <>
      <NavBar />
      <main class="main bg-dark">
        <HeaderProfil />
        <h2 class="sr-only">Accounts</h2>
        <Account />
        <section class="account">
          <div class="account-content-wrapper">
            <h3 class="account-title">Argent Bank Savings (x6712)</h3>
            <p class="account-amount">$10,928.42</p>
            <p class="account-amount-description">Available Balance</p>
          </div>
          <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
          </div>
        </section>
        <section class="account">
          <div class="account-content-wrapper">
            <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
            <p class="account-amount">$184.30</p>
            <p class="account-amount-description">Current Balance</p>
          </div>
          <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
