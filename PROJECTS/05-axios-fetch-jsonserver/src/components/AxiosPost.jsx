import React from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function AxiosPost() {
  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log(response.data);
  };

  const handleAxiosPost = () => {
    let randomID = Math.floor(Math.random() * 9999);
    let randomAGE = Math.floor(Math.random() * 100);
    let randomPOSTID = Math.floor(Math.random() * 500 + 20);
    const newUser = {
      id: randomID,
      name: `Example-${randomID}`,
      email: "Example@example.com",
      age: randomAGE,
      postId: randomPOSTID,
    };
    createUser(newUser);
  };

  return (
    <button className="axios-post" onClick={handleAxiosPost}>
      Axios POST
    </button>
  );
}

export default AxiosPost;
