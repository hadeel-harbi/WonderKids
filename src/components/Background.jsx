import React from "react";
import img1 from "../images/Element2.png";
import img2 from "../images/Element3.png";
import img3 from "../images/Element5.png";
import img4 from "../images/Element8.png";
import img5 from "../images/Element1.png";

const Background = () => {
  return (
    <>
      <div>
        <img
          src={img1}
          width={100}
          alt=""
          style={{
            position: "absolute",
            top: "50px",
            left: "80px",
            opacity: "30%",
          }}
        />
        <img
          src={img2}
          width={100}
          alt=""
          style={{ position: "absolute", top: "80px", right: "150px" }}
        />
        <img
          src={img3}
          width={100}
          alt=""
          style={{ position: "absolute", bottom: "100px", right: "50px" }}
        />
        <img
          src={img4}
          width={100}
          alt=""
          style={{
            position: "absolute",
            bottom: "200px",
            left: "120px",
            opacity: "50%",
          }}
        />
        <img
          src={img5}
          width={1500}
          alt=""
          style={{ position: "absolute", top: "0px", right: "0px" }}
        />
      </div>
    </>
  );
};

export default Background;
