import { Form, Input, Button, Row, Col } from "antd";
import UserInfo from "../UserInfo";
import User from "../../types/user.type";
import { useState } from "react"

export const Login = () => {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const handleLogout = () => {
    localStorage.setItem("email", "");
    setEmail("");
    console.log("logout");
  }

  const handleLogin = (values: User) => {
    localStorage.setItem("email", values.email);
    setEmail(values.email);
    console.log("login");
  }

  const onFinish = (values: User) => {
    handleLogin(values);
  }

  return email ? (
      <div style={{ display: "flex" }}>
        <UserInfo email={email} />
        <Button danger onClick={handleLogout}>
          Logout
        </Button>
      </div>
    ) : (
      <Form
        name="login-form"
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Row gutter={8}>
          <Col span={9}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Enter a valid email" }]}
              style={{ marginBottom: 0 }}
            >
              <Input placeholder="Email" type="email" />
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Enter a valid password" }]}
              style={{ marginBottom: 0 }}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item wrapperCol={{ span: 24 }} style={{ marginBottom: 0 }}>
              <Button type="primary" htmlType="submit">
                Login/Register
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
}