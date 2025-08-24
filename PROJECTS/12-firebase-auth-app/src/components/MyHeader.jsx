import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { SiFirebase } from "react-icons/si";
import { toast } from "react-toastify";

function MyHeader() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    toast.success("Çıkış Yapıldı!");
    await signOut(auth);
    setUser(null);
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <SiFirebase className="logo-icon" />
        <span className="title">FIREBASE</span>
      </div>

      <button
        className={`logout-btn ${user ? "active" : "inactive"}`}
        onClick={handleLogout}
      >
        Çıkış Yap
      </button>
    </header>
  );
}

export default MyHeader;
