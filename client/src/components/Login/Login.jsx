import React from "react";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button variant="primary" onClick={() => loginWithRedirect()}>
      Login
    </Button>
  );
};

export default Login;
