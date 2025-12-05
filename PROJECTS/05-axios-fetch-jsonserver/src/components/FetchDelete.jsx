import React from "react";

const BASE_URL = "http://localhost:3005";

function FetchDelete() {
  const deleteUserById = async (userID) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${userID}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log("Deleted user:", data);
    } catch (error) {
      console.error("NOT FOUND TRY AGAIN BABY", error);
    }
  };

  const handleFetchDelete = async () => {
    await deleteUserById("20");
  };

  return (
    <button className="fetch-delete" onClick={handleFetchDelete}>
      Fetch DELETE
    </button>
  );
}

export default FetchDelete;
