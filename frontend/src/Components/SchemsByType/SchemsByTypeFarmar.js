import React from "react";
import Schema from "../Home/Schema/Schema";

const SchemsByTypeFarmar = () => {
  const dummy = [
    {
      name: "smart-cities-mission-portal-ministry-urban-development",
      description:
        "Smart Cities Mission Portal by Ministry of Urban Development",
      imgurl:
        "https://img.etimg.com/thumb/msid-67857499,width-300,height-225,imgsize-120169,resizemode-75/famrer.jpg",
    },
    {
      name: "smart-cities-mission-portal-ministry-urban-development",
      description:
        "Smart Cities Mission Portal by Ministry of Urban Development",
      imgurl: "https://kjcdn.gumlet.io/media/37564/farmer-1.png?w=640&dpr=1.0",
    },
    {
      name: "smart-cities-mission-portal-ministry-urban-development",
      description:
        "Smart Cities Mission Portal by Ministry of Urban Development",
      imgurl:
        "https://static.india.com/wp-content/uploads/2021/08/farmers-income.jpg?impolicy=Medium_Widthonly&w=700",
    },
    {
      name: "smart-cities-mission-portal-ministry-urban-development",
      description:
        "Smart Cities Mission Portal by Ministry of Urban Development",
      imgurl:
        "https://t-news.gumlet.io/media/w45hbv3b/whatsapp-image-2022-08-10-at-5-47-48-pm.jpeg",
    },
    {
      name: "smart-cities-mission-portal-ministry-urban-development",
      description:
        "Smart Cities Mission Portal by Ministry of Urban Development",
      imgurl: "https://kjcdn.gumlet.io/media/27205/milk.png?w=640&dpr=1.0",
    },
    {
      name: "smart-cities-mission-portal-ministry-urban-development",
      description:
        "Smart Cities Mission Portal by Ministry of Urban Development",
      imgurl:
        "https://scontent.famd6-1.fna.fbcdn.net/v/t1.6435-9/67951345_100990414592038_1777695824331931648_n.png?_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_ohc=IWV1wf9VzAoAX8KHnTy&_nc_ht=scontent.famd6-1.fna&oh=00_AfDYnJLEJstNE0EDISNHV7RzMHlbA5WOgXC_FMAwv6ss5g&oe=6545BF40",
    },
  ];
  return (
    <>
      <div
        className="container rounded my-3"
        style={{ backgroundColor: "#9EC8B9" }}
      >
        <h3 className="txt">All Schema For Farmar </h3>
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

export default SchemsByTypeFarmar;
