const API_ROOT = `http://localhost:3000/api/v1`;

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token()
  };
};

const login = data => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data)
  }).then(resp => resp.json());
};

const newUser = data => {
  return fetch(`${API_ROOT}/users`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data)
  }).then(resp => resp.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers()
  }).then(resp => resp.json());
};

export const api = {
  auth: {
    login,
    getCurrentUser,
  },
  user: {
    newUser,
  }
};