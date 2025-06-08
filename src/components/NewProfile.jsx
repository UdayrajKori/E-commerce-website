import React from "react";
import Profile from "./Profile";

const NewProfile = (props) => {
  const user = props.user;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-80">
        <div className="flex flex-col items-center mb-4">
          <img
            src={user.avtar}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-2 border-2 border-gray-300"
          />
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
        </div>
        <div className="text-gray-700 space-y-1">
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {user.address}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {user.age}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewProfile;
