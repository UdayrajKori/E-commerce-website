import React from "react";
import Profile from "./Profile";
import profileImage from "../assets/profileImage.jpg";
import NewProfile from "./NewProfile";

const About = () => {
  const user = {
    name: "Udayraj Kori",
    avtar: profileImage,
    email: "john@gmail.com",
    address: "123 Main St, Springfield",
    phone: "123-456-7890",
    age: 30,
  };
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};

export default About;
