import axios from "axios";

// axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

const API_URL = "http://localhost:3001/api/v1/";

// const getUserSignUp = () => {
//   return axios.post(API_URL + "user/signup");
// };
const getUserLogin = async (email, pwd) => {
  return axios.post(API_URL + "user/login", { email: email, password: pwd }).then((response) => {
    const user = {
      token: response.data.body.token,
      isLoggedIn: true,
    };
    localStorage.setItem("user", JSON.stringify(user));
    return response;
  });
};

const getUserProfil = async (user) => {
  const dataHeader = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  return axios.post(API_URL + "user/profile", null, dataHeader).then((response) => {
    console.log(response);

    const userUpdated = { ...user, ...response.data.body };

    // Mise à jour des informations utilisateur dans le stockage local
    localStorage.setItem("user", JSON.stringify(userUpdated));

    return response;
  });
};
const putUserProfil = () => {
  return axios.put(API_URL + "user/profile");
};
const UserService = {
  getUserLogin,
  getUserProfil,
  putUserProfil,
};

export default UserService;
