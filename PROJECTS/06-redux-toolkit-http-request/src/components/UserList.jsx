import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/UserSlice";
import UserDisplay from "./UserDisplay";

function UserList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const { users } = useSelector((store) => store.user);

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserDisplay user={user} />
      ))}
    </div>
  );
}

export default UserList;
