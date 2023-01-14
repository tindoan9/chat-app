import React, { useContext } from "react";
import { Row, Col, Button, Typography } from "antd";

const { Title } = Typography;

export const Login = () => {
  const { handleLoginFb } = useContext();

  return (
    <>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Chat Room
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Login Google
          </Button>
          <Button onClick={handleLoginFb} style={{ width: "100%" }}>
            Login Facebook
          </Button>
        </Col>
      </Row>
    </>
  );
};
