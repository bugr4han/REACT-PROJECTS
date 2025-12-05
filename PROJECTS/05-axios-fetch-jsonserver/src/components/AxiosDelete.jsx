import React from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function AxiosDelete() {
  const deleteUserById = async (userID) => {
    try {
      const deletedUser = await axios.delete(`${BASE_URL}/users/${userID}`);
      console.log("Deleted user:", deletedUser.data);
    } catch (error) {
      console.error("NOT FOUND TRY AGAIN BABY", error);
    }
  };

  const handleAxiosDelete = () => {
    deleteUserById("20");
  };

  return (
    <button className="axios-delete" onClick={handleAxiosDelete}>
      Axios DELETE
    </button>
  );
}

export default AxiosDelete;
