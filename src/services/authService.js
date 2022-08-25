import http from "./httpService";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

http.setAuthHeader(getJwt());

async function login(user) {
  const data = {
    email: user.username,
    password: user.password,
  };
  const { data: jwt } = await http.post("http://localhost:8000/api/auth", data);
  localStorage.setItem(TOKEN_KEY, jwt);
}

function loginWithJwt(jwt) {
  localStorage.setItem(TOKEN_KEY, jwt);
}

function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

function getCurrentUser() {
  try {
    const token = getJwt();
    const user = jwtDecode(token);
    return user;
  } catch (error) {
    return null;
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getJwt,
  getCurrentUser,
};
