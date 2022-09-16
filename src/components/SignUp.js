import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

let letters = /^[A-Za-z]+$/;
let phoneno = /^[789]\d{9}$/;
let emails = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Signup = () => {
  const [signupData, setsignupData] = useState({
    name: "",
    dob: "",
    age: "",
    gender: "select",
    phoneNumber: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  let navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setsignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
    console.log(signupData);
  };

  const handleClick = () => {
    setsignupData({
      name: "",
      dob: "",
      age: "",
      gender: "select",
      phoneNumber: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      signupData.name === "" ||
      signupData.dob === "" ||
      signupData.age === "" ||
      signupData.gender === "" ||
      signupData.phoneNumber === "" ||
      signupData.email === "" ||
      signupData.password === "" ||
      signupData.confirmpassword === ""
    ) {
      alert("Enter the data");
    } else if (!signupData.name.match(letters)) {
      //Name
      alert("Please input alphabet characters only");
    } else if (signupData.age <= 0 || signupData.age > 100) {
      //Age
      alert("Invalid age");
    } else if (signupData.gender === "" || signupData.gender === "select") {
      //Gender
      alert("select Gender");
    } else if (
      signupData.phoneNumber.length < 10 ||
      signupData.phoneNumber.length > 10 ||
      !signupData.phoneNumber.match(phoneno)
    ) {
      //PhoneNumber
      alert("Invalid PhoneNumber");
    } else if (!signupData.email.match(emails)) {
      //Email
      alert("You have entered an invalid email address!");
    } else if (signupData.password !== signupData.confirmpassword) {
      //password
      alert("password do not match");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <h1
        style={{ backgroundColor: "pink", textAlign: "center" }}
        className="mt-3"
      >
        Register Here
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#82C09A" }}
        className="container border mt-3"
      >
        <div className="mb-2">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            required="true"
            maxLength=" 15"
            name="name"
            className="form-control"
            placeholder="Enter name"
            onChange={handleChange}
            value={signupData.name}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="dob" className="form-label">
            Date OF Birth:
          </label>
          <input
            type="date"
            name="dob"
            required="true"
            className="form-control"
            placeholder="mm/dd/yyyy"
            onChange={handleChange}
            value={signupData.dob}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="number"
            name="age"
            required="true"
            className="form-control"
            placeholder="Enter age"
            onChange={handleChange}
            value={signupData.age}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="gender" className="form-label">
            Gender:
          </label>
          <select
            name="gender"
            className="form-control"
            placeholder="Enter gender"
            onChange={handleChange}
            value={signupData.gender}
          >
            <option value="select">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-2">
          <label htmlFor="phoneNumber" className="form-label">
            PhoneNumber:
          </label>
          <input
            type="number"
            name="phoneNumber"
            required="true"
            className="form-control"
            placeholder="Enter phoneNumber"
            onChange={handleChange}
            value={signupData.phoneNumber}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            name="email"
            required="true"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
            value={signupData.email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            required="true"
            minLength="5"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
            value={signupData.password}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmpassword"
            className="form-control"
            placeholder="Re-Enter password"
            onChange={handleChange}
            value={signupData.confirmpassword}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>

        <button type="reset" className="btn btn-danger" onClick={handleClick}>
          Reset
        </button>

        <button type="cancel" className="btn btn-primary" onClick={redirect}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Signup;
