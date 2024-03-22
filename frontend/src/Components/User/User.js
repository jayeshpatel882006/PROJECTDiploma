import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const User = () => {
  const [user, setUser] = useState({
    name: "jayesh",
    Occupation: "student",
    Age: "20",
    State: "Gujarat",
  });
  const handalUpdate = () => {
    let yesorno = window.confirm("Do You Want To Update ? ");
    if (yesorno) {
      console.log(user);
    }
  };
  return (
    <div
      className="container p-3  rounded"
      style={{ backgroundColor: "#9EC8B9" }}
    >
      <div className="container">
        <div className="d-flex m-3" style={{ height: "50px", width: "500px" }}>
          <h2>UserName: </h2>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            style={{ fontSize: "30px", fontWeight: "bold" }}
            className="form-control"
          />
        </div>
        <div className="d-flex m-3" style={{ height: "50px", width: "500px" }}>
          <h4>Occupation: </h4>
          <select
            className="form-select"
            aria-label="Disabled select example"
            disabled
          >
            <option selected>
              {user.Occupation} (You can not change this )
            </option>
          </select>
          {/* <input
            type="text"
            value={user.Occupation}
            onChange={(e) => setUser({ ...user, Occupation: e.target.value })}
            style={{ fontSize: "30px", fontWeight: "bold" }}
            className="form-control"
          /> */}
        </div>
        <div className="d-flex m-3" style={{ height: "50px", width: "500px" }}>
          <h4>Age: </h4>
          <input
            type="number"
            value={user.Age}
            onChange={(e) => setUser({ ...user, Age: e.target.value })}
            style={{ fontSize: "30px", fontWeight: "bold" }}
            className="form-control"
          />
        </div>
        <div className="d-flex m-3" style={{ height: "50px", width: "500px" }}>
          <h4>State: </h4>
          <input
            type="text"
            value={user.State}
            onChange={(e) => setUser({ ...user, State: e.target.value })}
            style={{ fontSize: "30px", fontWeight: "bold" }}
            className="form-control"
          />
        </div>
        <div>
          <button className="btn btn-info" onClick={() => handalUpdate()}>
            Update
          </button>
          <Link to="/" className="btn btn-primary mx-2">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
