import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Register() {
  const navigate = useNavigate();

  const registerOperation = async (values) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = response.user;
      if (user) {
        toast.success("Kullanıcı Oluşturuldu!");
        navigate("/welcome");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const registerSchema = yup.object({
    fullName: yup.string().required("İsim Soyisim zorunlu"),

    email: yup
      .string()
      .email("Geçerli email giriniz")
      .required("Email zorunlu"),

    password: yup.string().required("Şifre zorunlu"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
      .required("Şifre tekrar zorunlu"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      registerOperation(values);
      console.log("Kayıt form verileri:", values);
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">Hesap Oluştur</h2>

        <form className="register-form" onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="İsim Soyisim"
              className={`register-input ${
                formik.touched.fullName && formik.errors.fullName ? "error" : ""
              }`}
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <div className="register-error-message">
                {formik.errors.fullName}
              </div>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`register-input ${
                formik.touched.email && formik.errors.email ? "error" : ""
              }`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="register-error-message">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Şifre"
              className={`register-input ${
                formik.touched.password && formik.errors.password ? "error" : ""
              }`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="register-error-message">
                {formik.errors.password}
              </div>
            )}
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Şifreyi Onayla"
              className={`register-input ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "error"
                  : ""
              }`}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="register-error-message">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>

          <button type="submit" className="register-btn">
            Kayıt Ol
          </button>
        </form>

        <p className="login-text">
          Zaten hesabınız var mı? -{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Giriş Yap
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
