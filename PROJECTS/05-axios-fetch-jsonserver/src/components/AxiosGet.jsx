import React from "react";
import axios from "axios";
import { useEffect } from "react";

const BASE_URL = "http://localhost:3005";

function AxiosGet() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
    console.log("----------------------------------------------------");
  };

  const getUserByID = async (userID) => {
    const response = await axios.get(`${BASE_URL}/users/${userID}`);
    console.log(response.data);
    console.log("----------------------------------------------------");
  };

  const handleAxiosGet = () => {
    getAllUsers();
    getUserByID(5);
  };

  return (
    <button className="axios-get" onClick={handleAxiosGet}>
      Axios GET
    </button>
  );
}

export default AxiosGet;
