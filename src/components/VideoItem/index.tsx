import ReactPlayer from "react-player";
import Video from "../../types/video.type";
import { Row, Col } from "antd";

export const VideoItem = ({ video }: { video: Video }) => {
  const { title, description, url } = video;

  return (
    <Row gutter={8} style={{ padding: 16 }} data-testid="movie-item">
      <Col span={10}>
        <div style={{ textAlign: "right" }}>
          <ReactPlayer width={560} height={340} url={url} />
        </div>
      </Col>
      <Col span={5} offset={8}>
        <div style={{ textAlign: "left" }}>
          <h2 style={{ margin: "0 0 8px", color: "#ff4d4f" }}>{title}</h2>
          <p style={{ margin: 0 }}>
            <b>Description:</b>
          </p>
          <p style={{ margin: 0 }}>{description}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoItem;
