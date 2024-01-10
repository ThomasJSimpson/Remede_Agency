import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Account from "../components/Account";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeaderProfil from "../components/HeaderProfil";
import { logOut, updateUserInfo } from "../features/login/userSlice";
import authService from "../services/auth.service.js";

export default function UserPage() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isRemembered = useSelector((state) => state.user.isRemembered);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/sign-in");
    }

    const fetchData = async () => {
      try {
        const userStorageData = isRemembered ? JSON.parse(localStorage.getItem("user")) : JSON.parse(sessionStorage.getItem("user"));
        const profilResponse = await authService.getUserProfil(userStorageData);
        const userDataUpdated = { ...userStorageData, ...profilResponse.data.body };
        dispatch(updateUserInfo({ ...profilResponse.data.body }));
        isRemembered ? localStorage.setItem("user", JSON.stringify(userDataUpdated)) : sessionStorage.setItem("user", JSON.stringify(userDataUpdated));
      } catch (err) {
        dispatch(logOut());
        console.error(err);
        return navigate("/");
      }
    };
    fetchData();
  }, [dispatch, navigate, isLoggedIn, isRemembered]);

  const account1 = {
    accountTitle: "Argent Bank Checking (x8349)",
    accountAmount: "$2,082.79",
    amountDescription: "Available Balance",
  };
  const account2 = {
    accountTitle: "Argent Bank Savings (x6712)",
    accountAmount: "$10,928.42",
    amountDescription: "Available Balance",
  };
  const account3 = {
    accountTitle: "Argent Bank Credit Card (x8349)",
    accountAmount: "$184.30",
    amountDescription: "Current Balance",
  };

  return isLoggedIn ? (
    <div className="body-wrapper">
      <NavBar />
      <main className="main bg-dark">
        <HeaderProfil />
        <h2 className="sr-only">Accounts</h2>
        <Account data={account1} />
        <Account data={account2} />
        <Account data={account3} />
      </main>
      <Footer />
    </div>
  ) : null;
}
