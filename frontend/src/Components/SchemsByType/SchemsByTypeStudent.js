import React from "react";
import Schema from "../Home/Schema/Schema";

const SchemsByTypeStudent = () => {
  const dummy = [
    {
      name: "Student Schems",
      description:
        "Smart Cities Mission Portal by Ministry of Urban Development",
      imgurl:
        "https://i0.wp.com/asianmail.in/wp-content/uploads/2023/06/Photo.jpeg?resize=1024%2C682&ssl=1",
    },
    {
      name: "Student Schems for all  Student",
      description:
        "Smart Cities Mission Portal by Ministry of Urban Development",
      imgurl:
        "https://d3l793awsc655b.cloudfront.net/blog/wp-content/uploads/2023/01/UP-Free-Laptop-Yojana-Scheme.jpg",
    },
  ];
  return (
    <>
      <div
        className="container rounded my-3"
        style={{ backgroundColor: "#9EC8B9" }}
      >
        <h3 className="txt">All Schema For Student </h3>
        <div className=" PSDContainer">
          {dummy.map((item, index) => (
            <div key={index}>
              <div className="Schema mb-3">
                {/* <h2>{item.name ? item.name.slice(0, 35) + "..." : ""}</h2>
        <h2>
          {item.description ? item.description.slice(0, 55) + "..." : ""}
        </h2> */}
                <Schema
                  Title={item.name ? item.name.slice(0, 35) + "..." : ""}
                  imgUrl={item.imgurl}
                  text={
                    item.description
                      ? item.description.slice(0, 55) + "..."
                      : ""
                  }
                  btnTxt={"Check Eligibility"}
                  Url={"/checkEligibality"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SchemsByTypeStudent;
