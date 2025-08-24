import { useFormik } from "formik";
import * as yup from "yup";

const registerFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli email adresi giriniz")
    .required("Email adresi zorunlu"),
  age: yup
    .number()
    .typeError("Lütfen sayı giriniz")
    .positive("Pozitif bir değer giriniz")
    .integer("Tam sayı giriniz")
    .required("Yaş alanı zorunlu"),
  password: yup.string().required("Şifre alanı zorunlu"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Şifre tekrar zorunlu"),
  term: yup.boolean().oneOf([true], "Lütfen kutucuğu onaylayınız").required(),
});

function RegisterForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: false,
    },
    validationSchema: registerFormSchemas,
    onSubmit: (values) => {
      const submitValues = { ...values, age: Number(values.age) };
      console.log("Form verileri:", submitValues);
    },
    validateOnChange: false, // değişiklikte hata gösterme
    validateOnBlur: false, // blur olduğunda hata gösterme
  });

  return (
    <div className="container">
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="formLabel">Email</label>
          <input
            className="formInput"
            type="text"
            name="email"
            placeholder="Email giriniz"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="formError">{errors.email}</p>}
        </div>

        <div className="formGroup">
          <label className="formLabel">Yaş</label>
          <input
            className="formInput"
            type="number"
            name="age"
            placeholder="Yaş giriniz"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p className="formError">{errors.age}</p>}
        </div>

        <div className="formGroup">
          <label className="formLabel">Şifre</label>
          <input
            className="formInput"
            type="password"
            name="password"
            placeholder="Şifre giriniz"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="formError">{errors.password}</p>}
        </div>

        <div className="formGroup">
          <label className="formLabel">Şifre Tekrar</label>
          <input
            className="formInput"
            type="password"
            name="confirmPassword"
            placeholder="Şifre tekrar giriniz"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="formError">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="formGroup checkboxGroup">
          <label className="formCheckboxLabel">
            <input
              className="formCheckbox"
              type="checkbox"
              name="term"
              checked={values.term}
              onChange={handleChange}
            />
            Sözleşmeyi kabul ediyorum
          </label>
          {errors.term && <p className="formError">{errors.term}</p>}
        </div>

        <button className="formButton" type="submit">
          Kayıt Ol
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
