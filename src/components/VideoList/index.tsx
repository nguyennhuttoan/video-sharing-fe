import Video from "../../types/video.type";
import { Empty } from "antd";
import VideoItem from "../VideoItem";

export const VideoList = ({ videoList }: { videoList: Video[] }) => {
  return (
    <div style={{ width: "70%", margin: "40px auto 0", padding: 30 }}>
      {videoList.length !== 0 ? (
        videoList.map((video: Video) => (
          <VideoItem
            key={(Math.random() + 1).toString(36).substring(7)}
            video={video}
          />
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default VideoList;
