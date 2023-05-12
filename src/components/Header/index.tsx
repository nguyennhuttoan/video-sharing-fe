import { Row, Col, Divider } from "antd";
import { Login } from "../Login";

export const Header = () => {
  return (
    <>
      <Row align="middle">
        <Col span={9} offset={3}>
          <div style={{ display: "flex" }}>
            <h1>Video Sharing</h1>
          </div>
        </Col>
        <Col span={10} offset={2}>
          <Login />
        </Col>
      </Row>
      <Divider style={{ marginTop: 5 }} />
    </>
  );
};

export default Header;
