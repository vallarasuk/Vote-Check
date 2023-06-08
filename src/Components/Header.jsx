import React, { useState } from "react";

const Header = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userValidate, setUserValidate] = useState(false);
  const [userRespons, setUserRespons] = useState("");
  const [colors, setColors] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isNaN(userAge) || userAge < 0 || userAge > 110) {
      setUserRespons("Please enter a valid age");
      setColors("red");
      return;
    }

    if (userName === "") {
      setUserRespons("Hello User, please enter your name");
      setColors("red");
    } else if (userAge === "") {
      setUserRespons("Please enter your age");
      setColors("red");
    } else if (!userValidate) {
      setUserRespons("Please accept the terms and conditions");
      setColors("red");
    } else if (userAge >= 18 && !userValidate) {
      setUserRespons(
        `Hi ${userName}! Your age is ${userAge}, so you are allowed to vote. You need to accept the terms and conditions.`
      );
      setColors("red");
    } else if (userAge < 18) {
      setUserRespons(
        `Hi ${userName}! Your age is less than 18, so you are not allowed to vote.`
      );
      setColors("red");
    } else if (userAge >= 18 && userValidate) {
      setUserRespons(
        `Hi ${userName}! Your age is ${userAge}, so you are allowed to vote.`
      );
      setColors("green");
    } else {
      setUserRespons(
        "Please enter your age and accept the terms and conditions"
      );
      setColors("red");
    }
  };

  return (
    <div className="container my-3 my-sm-5 card py-4 px-3 shadow rounded-5">
      <h5 className="text-center text-uppercase bg-info p-2 py-3 fw-bold text-white rounded-5 shadow">
        Age-based Voting Calculation
      </h5>
      <form onSubmit={handleSubmit} className="mx-3">
        <div className="text-start">
          <div className="text-center">
            <div>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{ fontSize: 18 }}
                className="shadow border rounded-pill p-3 px-4 mt-3"
                pattern="[A-Za-z ]+"
                title="Please enter only text characters"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Enter Your Age"
                value={userAge}
                onChange={(e) => setUserAge(e.target.value)}
                style={{ fontSize: 18 }}
                maxLength={100}
                className="shadow border px-4 rounded-pill p-3 mt-3"
              />
            </div>
            <h6
              className="fw-bold text-capitalize mt-3"
              id="response"
              style={{ color: colors }}
            >
              {userRespons}
            </h6>
            <div>
              <input
                type="checkbox"
                name="valid"
                id="valid"
                checked={userValidate}
                onChange={(e) => setUserValidate(e.target.checked)}
              />
              <span className="mx-2 h6 text-muted">
                Accept terms and conditions
              </span>
            </div>
            <button
              className="btn btn-primary p-2 text-uppercase fw-bold mt-3 shadow px-4 rounded-pill"
              type="submit"
            >
              Check
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
