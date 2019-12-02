export const TOKEN_KEY = "@zuum-Token";

export const isAuthenticated = () => localStorage.getItem("@zuum-Token") !== false;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
