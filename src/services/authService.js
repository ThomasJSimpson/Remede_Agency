import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/";

const getUserLogin = async (email, pwd) => {
  return axios.post(API_URL + "user/login", { email: email, password: pwd }).then((response) => {
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
    return response;
  });
};

const putUserProfil = async (databody, user) => {
  const dataHeader = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  return axios.put(API_URL + "user/profile", databody, dataHeader).then((response) => {
    return response;
  });
};
const UserService = {
  getUserLogin,
  getUserProfil,
  putUserProfil,
};

export default UserService;
