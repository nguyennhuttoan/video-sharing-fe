import { AxiosError } from "axios";
import http from "../http";
import Video from "../types/video.type";

class VideoService {
  getAll() {
    return http
      .get<Array<Video>>("/video")
      .then((response) => {
        if (response.data) {
          return response.data;
        }
      })
      .catch((err: AxiosError) => {
        console.error(err.response);
        return [];
      });
  }

  create(data: Video) {
    return http.post<Video>("/video", data);
  }
}

export default new VideoService();
