import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

function WhenUserLogin() {
  const [userInformation, setUserInformation] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInformation(user.email);
      }
    });
  }, []);

  return (
    <div className="home-page">
      <div>MERHABA!</div>
      <div>EMAIL ADRESINIZ: {userInformation}</div>
    </div>
  );
}

export default WhenUserLogin;
