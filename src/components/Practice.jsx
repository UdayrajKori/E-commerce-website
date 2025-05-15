import { useEffect, useState } from "react";

const Practice = () => {
  const [name, setName] = useState("Uday");

  useEffect(() => {
    console.log("useEffect is called");
  });

  setName();

  return (
    <div>
      <button onChange={name}>Change name</button>
    </div>
  );
};

export default Practice;
