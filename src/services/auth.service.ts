import { AxiosError } from "axios";
import http from "../http";
import User from "../types/user.type";

class AuthService {
  login(data: User) {
    return http
      .post<User>("/auth/login", data)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
          localStorage.setItem("email", data.email);

          return true;
        }
      })
      .catch((err: AxiosError) => {
        localStorage.setItem("email", "");
        console.error(err.response);
      });
  }

  logout() {
    localStorage.setItem("email", "");
    localStorage.removeItem("token");
  }
}

export default new AuthService();
