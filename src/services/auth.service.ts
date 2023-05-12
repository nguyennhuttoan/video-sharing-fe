import { AxiosError } from "axios";
import http from "../http";
import User from "../types/user.type";
import { message } from "antd";

class AuthService {
  login(data: User) {
    return http
      .post<User>("/auth/login", data)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("email", data.email);
          message.success("Login Successfully");

          return true;
        }
      })
      .catch((err: AxiosError) => {
        localStorage.setItem("email", "");
        message.error("Invalid email or password");
        console.error(err.response);
      });
  }

  logout() {
    localStorage.setItem("email", "");
    localStorage.removeItem("token");
  }
}

export default new AuthService();
