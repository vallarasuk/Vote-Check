import React, { useState } from "react";

const Header = () => {
  const [userRespons, setUserRespons] = useState("");
  const [colors, setColors] = useState("");
  const handleSubmit = (event) => {
    let userName = document.getElementById("name").value;
    let userAge = document.getElementById("age").value;
    let userValidate = document.getElementById("valid").checked;
    let allowedAge = 18;

    if (userName === "") {
      setUserRespons(`Hello User please enter you name`);
      setColors("red");
    } else if (userAge === "") {
      setUserRespons("please enter you age");
      setColors("red");
    } else if (userAge && !userValidate) {
      setUserRespons("please accept terms and conditions");
      setColors("red");
    } else if (userAge >= 18 && userValidate === false) {
      setUserRespons(
        `Hi..! ${userName} Your Age ${allowedAge}, So Your are allow to vote, You Need to accept terms and conditions`
      );
      setColors("red");
    } else if (userAge <= 18) {
      setUserRespons(
        `Hi..! ${userName} Your Age less than ${allowedAge}, So Your are not allow to vote`
      );
      setColors("red");
    } else if (userAge >= 18 && userValidate === true && userName) {
      setUserRespons(
        `Hi..! ${userName} Your Age ${userAge}, So Your are allow to vote`
      );
      setColors("green");
    } else {
      setUserRespons(`please enter you age and accept terms and condition`);
      setColors("red");
    }

    event.preventDefault();
  };

  return (
    <div className="container my-3">
      <h3 className="text-center my-4 text-uppercase title">
        If else condition
      </h3>
      <h5 className="text-center bg-info p-2 fw-bold text-white rounded-5 shadow">
        Age based voting system
      </h5>
      <form onSubmit={handleSubmit} className="mx-3">
        <div className="text-start">
          <div className=" text-center">
            <div className="">
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                id="name"
                style={{ fontSize: 18 }}
                className="shadow border rounded-pill p-3 px-4 mt-3"
              />
            </div>
            <div className="">
              <input
                type="number"
                placeholder="Enter Your Age"
                name="age"
                id="age"
                style={{ fontSize: 18 }}
                maxLength={"100"}
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
              <input type="checkbox" name="valid" id="valid" />
              <span className="mx-2 h6">Accept terms and conditions</span>
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
