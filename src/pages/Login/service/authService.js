const doLogIn = (email) => {
  localStorage.setItem("email", email);
  localStorage.setItem("isLoggedIn", true);
};

const isLoggedIn = () => {
  return Boolean(localStorage.getItem("isLoggedIn"));
};

const logOut = (props) => {
  localStorage.removeItem("email");
  localStorage.removeItem("isLoggedIn");
  // props.history.push("/login");
};

export default {
  doLogIn,
  isLoggedIn,
  logOut,
};
