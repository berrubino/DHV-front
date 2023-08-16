import axios from "axios";
import { back_route } from "../../../config";

export const login = async ({ email, password }) => {
  try {
    console.log("loguedUser", email, password);
    const user = await axios.post(
      `${back_route}/user/login`,
      { email: email, password: password },
      {
        withCredentials: true,
      }
    );
    console.log("user", user);
    return user;
  } catch (err) {
    console.log(err);
  }
};
