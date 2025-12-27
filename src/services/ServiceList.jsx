import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const SERVICES_DATA = [
  {
    imgUrl: weatherImg,
    title: "Calculate weather",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.",
  },
  {
    imgUrl: guideImg,
    title: "Best tour guide",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aspernatur animi amet velit.",
  },
];

const ServiceList = () => {
  return (
    <>
      {SERVICES_DATA.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
