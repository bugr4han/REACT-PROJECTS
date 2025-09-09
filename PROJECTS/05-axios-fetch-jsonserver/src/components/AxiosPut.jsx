import React from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function AxiosPut() {
  const updateUser = async (userID, theUpdatedUser) => {
    await axios.put(`${BASE_URL}/users/${userID}`, theUpdatedUser);
  };

  const handleAxiosPut = () => {
    let randomID = Math.floor(Math.random() * 9999);
    let randomAGE = Math.floor(Math.random() * 100);
    let randomPOSTID = Math.floor(Math.random() * 500 + 20);
    const changeUserInfos = {
      id: "5",
      name: `Example-${randomID}`,
      email: "Example@example.com",
      age: randomAGE,
      postId: randomPOSTID,
    };

    updateUser("5", changeUserInfos);
    console.log("UPDATED!");
  };

  return (
    <button className="axios-put" onClick={handleAxiosPut}>
      Axios PUT
    </button>
  );
}

export default AxiosPut;
