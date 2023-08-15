import axios from "axios";
import { back_route } from "../../../config";

export const signup = async ({
  name,
  lastname,
  password,
  email,
  phone_number,
  address,
  city,
  state,
  zip_code,
}) => {
  try {
    console.log(
      "user",
      name,
      lastname,
      password,
      email,
      phone_number,
      address,
      city,
      state,
      zip_code
    );
    await axios.post(
      `${back_route}/user/signup`,
      {
        name,
        lastname,
        password,
        email,
        phone_number,
        address,
        city,
        state,
        zip_code,
      },
      { withCredentials: true }
    );
  } catch (error) {
    console.log(error);
  }
};
