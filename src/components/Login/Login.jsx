import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/user";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const {  message, error } = useSelector((state) => state.login);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [error, message, dispatch]);

  return (
    <>
      <div className="login">
        <div className="loginContainer">
          <form className="loginForm" onSubmit={submitHandler}>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" >
              Login
            </Button>{" "}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
