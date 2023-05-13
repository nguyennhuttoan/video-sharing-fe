import ReactPlayer from "react-player";
import Video from "../../types/video.type";
import { Row, Col } from "antd";

export const VideoItem = ({ video }: { video: Video }) => {
  const { title, description, url } = video;

  return (
    <Row gutter={10} style={{ padding: 16 }} data-testid="movie-item">
      <Col span={10}>
        <div style={{ textAlign: "right" }}>
          <ReactPlayer width={426} height={240} url={url} />
        </div>
      </Col>
      <Col span={10} offset={3}>
        <div style={{ textAlign: "left" }}>
          <h2 style={{ margin: "0 0 8px" }}>{title}</h2>
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
