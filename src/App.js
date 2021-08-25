import "./styles.css";
import { useState } from "react";

import CheckPalindrome from "./CheckPalindrome";
import checkPrevNext from "./CheckPrevNext";
import { differenceInDates } from "./DifferenceInDates";
import Footer from "./Footer";
const App = () => {
  const [date, setDate] = useState("yyyy-mm-dd");
  const [result, setResult] = useState(" ");
  const loader = () => {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  };
  const run = () => {
    const res = CheckPalindrome(date);
    if (res[0]) {
      setResult(
        `Yaaaay 🤩🤩!!! your birthdate is a palindrome 👉 ${res[2][res[3]]} 👈`
      );
    } else {
      let otherwise = checkPrevNext(date);
      let prevDate = differenceInDates(otherwise[0], date);
      let nextDate = differenceInDates(date, otherwise[1]);

      if (prevDate < nextDate) {
        setResult(
          `Wooops! Your birthdate is not a palindrome, the nearest palindrome date is ${otherwise[0]} and you missed it by just ${prevDate}`
        );
      } else {
        setResult(
          `Wooops! Your birthdate is not a palindrome, the nearest palindrome date is ${otherwise[1]} and you missed it by just ${nextDate} days`
        );
      }
    }
  };

  const handleClick = () => {
    if (date === "yyyy-mm-dd") {
      setResult("Please provide a valid date");
    } else {
      setResult("");
      // document.querySelector(".loader-div").style.display = "block";
      //document.getElementById("loading").innerText = loader;
      setTimeout(run, 2000);
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-6">
            <div className="container">
              <p className="font-weight-bold mt-3" style={{ fontSize: "30px" }}>
                Palindrome Birthday!
              </p>
              <hr />
            </div>
            <div className="container mt-2">
              <div className="font-weight-bold" style={{ fontSize: "30px" }}>
                Enter your Birthday Date:
              </div>
              <input
                className="mt-3 datepick"
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-info mt-5"
              style={{ fontSize: "25px" }}
              onClick={handleClick}
            >
              Check!
            </button>
            <div className="container mt-5">
              <p id="loading">{!result && loader()}</p>
              <p
                className="font-weight-bold"
                id="res"
                style={{ fontSize: "30px" }}
              >
                {result}
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div
              className="card mt-5 mx-auto"
              style={{ width: "18rem", border: "5px solid white" }}
            >
              <img
                src="https://bestanimations.com/media/birthday/1147226634birthday-cake-burning-candles-animated-card-gif.gif"
                className="card-img-top"
                alt="GIF Not Found"
              />
              <div className="card-body alert-warning">
                <h5 className="card-title font-weight-bold">
                  Happy B'day Always!
                </h5>
                <p className="card-text">
                  Celebrating each day as a new day,each day is a b'day,keep
                  doing great deeds!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
