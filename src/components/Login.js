import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

function Login(props) {
  const [setLogin, setLoginData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  const [emailValid, setemailValid] = useState(true);
  const [emailErr, setemailErr] = useState("");

  const [passwordValid, setpasswordValid] = useState(true);
  const [passwordErr, setpasswordErr] = useState("");
  let { email, password } = setLogin;
  let history = useNavigate();


  const handleChange = (e) => {
    setLoginData({
      ...setLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(setLogin);

    const validEmail = validateEmail(setLogin.email);
    const validPassword = validatePassword(setLogin.password);
    const regExEmail = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const regExPassword = RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );

    if (
      !validEmail ||
      !validPassword ||
      !regExEmail.test(email) ||
      !regExPassword.test(password)
    ) {
      console.log(!validEmail);
      console.log(!validPassword);
      console.log(!regExEmail.test(email));
      console.log(!regExEmail.test(password));
      console.error("not valid");
    } else {
      history("/home");
    }
  };
  const validateEmail = (email) => {
    const regEx =
      /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email === "") {
      setemailValid(false);
      setemailErr("Please enter valid email");
      return false;
    } else if (!regEx.test(email)) {
      setemailValid(false);
      setemailErr("Email Address must be in valid formate with @ symbol");
      return false;
    } else {
      setemailValid(true);
      setemailErr("");
      return true;
    }
  };
  const validatePassword = (password) => {
    const regEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === "") {
      setpasswordValid(false);
      setpasswordErr("Please enter valid password");
      return false;
    } else if (!regEx.test(password)) {
      setpasswordValid(false);
      setpasswordErr(
        "Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters"
      );
      return false;
    } else {
      setpasswordValid(true);
      setpasswordErr("");
      return true;
    }
  };


  // if (setLogin.email === "" || setLogin.password === "") {
  //   alert("enter the data");
  // }
  // navigate("/home");



  return (
    <div
      className="container border mt-3 shadow"
      style={{ backgroundColor: "mintcream" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required="true"
            className="form-control"
            onChange={handleChange}
            value={setLogin.email}
          />

          {!emailValid ? (
            <span style={{ color: "red", fontSize: "8px" }}>{emailErr}</span>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            required="true"
            minLength="5"
            className="form-control"
            onChange={handleChange}
            value={setLogin.password}
          />

          {!passwordValid ? (
            <span style={{ color: "red", fontSize: "8px" }}>{passwordErr}</span>
          ) : null}
        </div>

        <Box textAlign="center">
          <div>
            <Link to="./home">
              <button type="submit" className="btn btn-primary mb-2">
                Log In
              </button>
            </Link>
          </div>

          <div>
            <Link to="./signup">
              <button
                type="submit"
                className="btn  mb-2"
                style={{ color: "blue" }}
              >
                Forgot Password?
              </button>
            </Link>
          </div>

          <div>
            <Link to="./signup">
              <button type="submit" className="btn btn-success mb-2">
                Create a New Account
              </button>
            </Link>
          </div>
        </Box>
      </form>
    </div>
  );
}

export default Login;
