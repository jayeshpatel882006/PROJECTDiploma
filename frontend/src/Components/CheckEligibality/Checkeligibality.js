import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Checkeligibality = () => {
  const history = useHistory();
  const handalCheck = () => {
    alert("You Are Eligibal!");
    // history.push("/");
  };
  return (
    <>
      <div
        className="container rounded p-4"
        style={{ backgroundColor: "#9EC8B9" }}
      >
        <form
          className="p-4 rounded"
          onSubmit={() => handalCheck()}
          style={{ backgroundColor: "#092635" }}
        >
          <h3 className="mb-3" style={{ color: "white", textAlign: "center" }}>
            Check Eligibality
          </h3>
          <div className=" mb-3">
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
              />
              <h4 className="mx-1">Are You 18 + ?</h4>
            </div>
          </div>
          <div className=" mb-3">
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
              />
              <h4 className="mx-1">
                is Your Family income is less than 5 lakh par anum ?
              </h4>
            </div>
          </div>
          <div className=" mb-3">
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                value=""
              />
              <h4 className="mx-1">Are You Disabaled ?</h4>
            </div>
          </div>
          <button className="btn btn-primary">Check </button>
        </form>
        <div>
          <Link to="/" className="btn btn-primary m-4">
            Go To Home
          </Link>
          <a
            target="_blank"
            href="https://www.myscheme.gov.in/"
            className="btn btn-primary m-4"
          >
            Go To Schema Page
          </a>
        </div>
      </div>
    </>
  );
};
export default Checkeligibality;
