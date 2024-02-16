import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const SignInGoogle = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="signInGoogle" onClick={() => loginWithRedirect()}>
      {" "}
      <img src={google} />
      <div className="google-text">SIGN IN GOOGLE</div>
    </button>
  );
};

export default SignInGoogle;
