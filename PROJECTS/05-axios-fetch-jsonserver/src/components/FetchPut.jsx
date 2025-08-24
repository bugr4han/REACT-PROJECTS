import React from "react";

const BASE_URL = "http://localhost:3005";

function FetchPut() {
  const updateUser = async (userID, theUpdatedUser) => {
    await fetch(`${BASE_URL}/users/${userID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theUpdatedUser),
    });
  };

  const handleFetchPut = async () => {
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

    await updateUser("5", changeUserInfos);
    console.log("UPDATED!");
  };

  return (
    <button className="fetch-put" onClick={handleFetchPut}>
      Fetch PUT
    </button>
  );
}

export default FetchPut;
