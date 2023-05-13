import { Row, Col, Divider } from "antd";
import { Login } from "../Login";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Row align="middle">
        <Col span={9} offset={3}>
          <Link to="/">
            <div style={{ display: "flex" }}>
              <img
                src="https://i.imgur.com/bFgnO91.png"
                alt="logo"
                width="200"
              />
            </div>
          </Link>
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
