import http from "../http";
import Video from "../types/video.type";

class VideoService {
  getAll() {
    return http.get<Array<Video>>("/video");
  }

  create(data: Video) {
    return http.post<Video>("/video", data);
  }
}

export default new VideoService();
