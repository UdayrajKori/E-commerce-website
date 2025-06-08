import React from "react";
import About from "./About";
import NewProfile from "./NewProfile";

const Profile = (props) => {
  return (
    <>
      <NewProfile user={props.user} />
    </>
  );
};

export default Profile;
