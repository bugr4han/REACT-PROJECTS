import React from "react";

const BASE_URL = "http://localhost:3005";

function FetchPost() {
  const createUser = async (newUser) => {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    console.log(data);
  };

  const handleFetchPost = async () => {
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
    await createUser(newUser);
  };

  return (
    <button className="fetch-post" onClick={handleFetchPost}>
      Fetch POST
    </button>
  );
}

export default FetchPost;
