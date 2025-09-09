import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loginOperation = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      const user = response.user;
      if (user) {
        toast.success("Giriş Başarılı!");
        navigate("/welcome");
      }
    } catch (error) {
      toast.error("Giriş Yapılamadı! " + error.message);
    }
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        toast.success("Google ile giriş başarılı!");
        navigate("/welcome");
      }
    } catch (error) {
      toast.error("Google ile giriş yapılamadı! " + error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Hoşgeldiniz</h2>

        <form className="login-form" onSubmit={loginOperation}>
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Şifre"
            className="login-input"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />

          <div className="button-group">
            <button type="submit" className="login-btn">
              Giriş Yap
            </button>
            <button type="button" className="google-btn" onClick={googleLogin}>
              <FcGoogle className="google-icon" />
            </button>
          </div>
        </form>

        <p className="signup-text">
          Hesabınız yok mu? -{" "}
          <span className="link" onClick={() => navigate("/register")}>
            Kaydol
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
