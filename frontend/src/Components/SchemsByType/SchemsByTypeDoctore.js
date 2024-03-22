import React from "react";
import Schema from "../Home/Schema/Schema";

const SchemsByTypeDoctore = () => {
  const dummy = [
    {
      name: " Goverment Doctor Schema",
      description:
        "Smart Cities Mission Portal by Ministry of Urban Development",
      imgurl:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2023-04/07/full/1680872523-7565.jpg?im=FeatureCrop,size=(826,465)",
    },
    {
      name: "Schema Doctor ",
      description:
        "Smart Cities Mission Portal by Ministry of Urban Development",
      imgurl:
        "https://scontent.famd6-1.fna.fbcdn.net/v/t1.6435-9/67951345_100990414592038_1777695824331931648_n.png?_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_ohc=IWV1wf9VzAoAX8KHnTy&_nc_ht=scontent.famd6-1.fna&oh=00_AfDYnJLEJstNE0EDISNHV7RzMHlbA5WOgXC_FMAwv6ss5g&oe=6545BF40",
    },
    {
      name: "All Doctor Schema",
      description:
        "Smart Cities Mission Portal by Ministry of Urban Development",
      imgurl: "https://taxguru.in/wp-content/uploads/2023/04/startIndia.jpg",
    },
    {
      name: "Doctor Schema",
      description:
        "Smart Cities Mission Portal by Ministry of Urban Development",
      imgurl:
        "https://www.khaskhabar.com/s3-storage/khaskhabar/khaskhabarimages/img500/18-76-1672837697-536407-khaskhabar.jpg",
    },
  ];
  return (
    <>
      <div
        className="container rounded my-3"
        style={{ backgroundColor: "#9EC8B9" }}
      >
        <h3 className="txt">All Schema For Doctor </h3>
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

export default SchemsByTypeDoctore;
