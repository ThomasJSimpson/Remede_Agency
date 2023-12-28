import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Account from "../components/Account";
import Footer from "../components/Footer";
import HeaderProfil from "../components/HeaderProfil";
import NavBar from "../components/NavBar";
import { logOut, updateUserInfo } from "../features/login/userSlice";
import authService from "../services/auth.service.js";

export default function UserPage() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/sign-in");
    }
    const fetchData = async () => {
      try {
        const userLocalData = JSON.parse(localStorage.getItem("user"));
        const profilResponse = await authService.getUserProfil(userLocalData);
        console.log(profilResponse);
        dispatch(updateUserInfo({ ...profilResponse.data.body }));
      } catch (err) {
        dispatch(logOut());
        console.error(err);
        return navigate("/");
      }
    };
    fetchData();
  }, [dispatch, navigate, isLoggedIn]);

  return isLoggedIn ? (
    <div className="body-wrapper">
      <NavBar />
      <main className="main bg-dark">
        <HeaderProfil />
        <h2 className="sr-only">Accounts</h2>
        <Account />
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  ) : null;
}
// jokerflash@MacBook-Pro-de-BERENGER Desktop % sudo mongod --dbpath=/Users/jokerflash/Desktop/DATA
