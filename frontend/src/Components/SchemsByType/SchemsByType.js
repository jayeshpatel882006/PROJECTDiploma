import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { Link } from "react-router-dom/cjs/react-router-dom";

const SchemsByType = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const docRef = collection(db, "data");
    const snapshot = await getDocs(docRef);
    setData(snapshot.docs.map((doc) => doc.data()));
    // console.log(snapshot.docs.map((doc) => doc.data()));
  };
  const DummyCatagory = [
    {
      header: "Farmar",
      title: "Schemes for Farmer(6)",
      text: "All The VArious Schems for Farmar",
      link: "",
    },
    {
      header: "Student",
      title: "Schemes for Student(2)",
      text: "Goverment Schems for Farmar",
      link: "",
    },
    {
      header: "Doctor",
      title: "Schemes for doctor(4) ",
      text: "Goverment Schems for Doctor ",
      link: "",
    },
  ];
  return (
    <>
      <div
        className="container rounded p-4"
        style={{ backgroundColor: "#9EC8B9" }}
      >
        <h2>Schemes By Type :</h2>
        <div
          className="Inner my-3"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {DummyCatagory.map((item, index) => (
            <>
              <div className="card text-center">
                <div className="card-header">{item.header} </div>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                  <Link
                    to={`/SchemsByType/${item.header}`}
                    className="btn btn-primary"
                  >
                    Check All Schems for {item.header}
                  </Link>
                </div>
                {/* <div className="card-footer text-muted">2 days ago</div> */}
              </div>
            </>
          ))}

          {/* <div className="card text-center">
            <div className="card-header">Farmer </div>
            <div className="card-body">
              <h5 className="card-title">Schemes for Farmer</h5>
              <p className="card-text">All The VArious Schems for Farmar</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SchemsByType;
