import React from "react";
import Schema from "../Home/Schema/Schema";
import "./ParticularScema_Display.css";

const DummyData = [
  {
    name: "Guidelines for Integrated Development of Commercial Floriculture Scheme",
    description: "Smart Cities Mission Portal by Ministry of Urban Development",
    imgurl:
      "https://img.jagranjosh.com/images/2023/July/2872023/Government-Initiatives-for-Schools-min.webp",
  },

  {
    name: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    description: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    imgurl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/Add_a_subheading_1_.png?VersionId=MoNEvek00g1J_WpgxJkZkiQbvUs3SVU7&size=690:388",
  },
  {
    name: "Paryavaran Vahini Scheme by Ministry of Environment and Forests",
    description:
      "New Millennium Indian Technology Leadership Initiative by CSIR",
    imgurl:
      "https://spmrf.org/wp-content/uploads/2018/06/NDA-Government-Schemes.jpg",
  },

  {
    name: "Guidelines for Integrated Development of Commercial Floriculture Scheme",
    description: "Smart Cities Mission Portal by Ministry of Urban Development",
    imgurl:
      "https://pmmodiyojana.in/wp-content/uploads/2023/11/image-113-1024x536.png",
  },
  {
    name: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    description: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    imgurl:
      "https://i0.wp.com/ketto.blog/wp-content/uploads/2023/10/Government-Health-Insurance-Schemes-in-India.jpg?w=1024&ssl=1",
  },
  {
    name: "New Millennium Indian Technology Leadership Initiative by CSIR",
    description:
      "New Millennium Indian Technology Leadership Initiative by CSIR",
    imgurl:
      " https://img.jagranjosh.com/images/2023/July/2872023/Government-Initiatives-for-Schools-min.webp",
  },

  {
    name: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    description: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    imgurl:
      "https://www.prashantchaturvedi.com/wp-content/uploads/2022/10/blog-img-5.jpg",
  },
  {
    name: "Information on Indira Awaas Yojana",
    description: "Smart Cities Mission Portal by Ministry of Urban Development",
    imgurl: "",
  },
  {
    name: "Information on Schemes petrochemical by the Department of Chemical and Petrochemical",
    description: "Smart Cities Mission Portal by Ministry of Urban Development",
    imgurl:
      "https://cdn-kdojn.nitrocdn.com/KkFPxEZidsismUjVIeEInuJTplCLDQhi/assets/images/optimized/rev-8cbef88/d3it91zw76pwp5.cloudfront.net/wp-content/uploads/2023/01/Government-schemes-for-girl-child-education.jpg",
  },
];

const ParticularScema_Display = () => {
  return (
    <>
      <div className="PSDWholeContainer">
        <h3 className="txt">Schema For You({DummyData.length}) : </h3>
        <div className=" PSDContainer">
          {DummyData.map((item, index) => (
            <div key={index}>
              <div className="Schema">
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

export default ParticularScema_Display;
