import http from "../http";
import User from "../types/user.type";

class AuthService {
  login(data: User) {
    return http.post<User>("/auth/signin", data);
  }
}

export default new AuthService();