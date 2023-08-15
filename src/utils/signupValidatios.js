import * as yup from "yup";

export const initialValues = {
  name: "",
  lastname: "",
  password: "",
  validatePassword: "",
  address: "",
  zip_code: "",
  phone_number: "",
  city: "",
  email: "",
};

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obligatory Field")
    .matches(/^[A-Za-z ]*$/, "Only alphabetic characters are allowed"),
  lastname: yup
    .string()
    .required("Obligatory Field")
    .matches(/^[A-Za-z ]*$/, "Only alphabetic characters are allowed"),
  password: yup
    .string()
    .required("Obligatory Field")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Password cannot contain spaces or special characters"
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  validatePassword: yup
    .string()
    .required("Obligatory Field")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Password cannot contain spaces or special characters"
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  email: yup
    .string()
    .required("Obligatory Field")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    ),
  phone_number: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "only numbers are allowed"),
  address: yup
    .string()
    .required("Obligatory Field")
    .matches(
      /^[a-zA-Z0-9\s.]+$/,
      "Invalid address. Only letters, numbers, spaces, and periods are allowed."
    ),

  city: yup
    .string()
    .required("Obligatory Field")
    .matches(
      /^[A-Za-z0-9 .]*$/,
      "Only alphabetic characters, numbers, spaces, and periods are allowed"
    ),

  state: yup
    .string()
    .required("Obligatory Field")
    .matches(
      /^[A-Za-z0-9 .]*$/,
      "Only alphabetic characters, numbers, spaces, and periods are allowed"
    ),
  zip_code: yup
    .string()
    .required("Obligatory Field")
    .matches(
      /^[A-Z0-9]+$/,
      "Invalid ZIP code. Only uppercase letters and numbers are allowed."
    )
    .max(8, "ZIP code must be a maximum of 8 characters long"),
});
