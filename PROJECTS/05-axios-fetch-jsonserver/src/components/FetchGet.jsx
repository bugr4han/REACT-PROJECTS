const BASE_URL = "http://localhost:3005";

function FetchGet() {
  const getAllUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    const data = await response.json();
    console.log(data);
    console.log("----------------------------------------------------");
  };

  const getUserByID = async (userID) => {
    const response = await fetch(`${BASE_URL}/users/${userID}`);
    const data = await response.json();
    console.log(data);
    console.log("----------------------------------------------------");
  };

  const handleFetchGet = async () => {
    await getAllUsers();
    await getUserByID(5);
  };

  return (
    <button className="fetch-get" onClick={handleFetchGet}>
      Fetch GET
    </button>
  );
}

export default FetchGet;
