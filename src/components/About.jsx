import React from "react";
import Profile from "./Profile";
import profileImage from "../assets/profileImage.jpg";
import NewProfile from "./NewProfile";
import UserContext from "./context/userDetailContext.js";

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
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
};

export default About;
