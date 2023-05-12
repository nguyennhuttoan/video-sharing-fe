import { AxiosError } from "axios";
import http from "../http";
import Video from "../types/video.type";
import { message } from "antd";

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

  create(data: Video, token: string) {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    return http
      .post<Video>("/video", data, config)
      .then(() => {
        message.success("Posted successfully");
        return true;
      })
      .catch((err: AxiosError) => {
        message.error("An error has been occurred");
        console.error(err.response);
        return false;
      });
  }
}

export default new VideoService();
