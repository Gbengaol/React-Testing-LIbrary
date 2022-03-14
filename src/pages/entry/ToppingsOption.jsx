import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function ToppingsOption({ name, imagePath, updateItemCount }) {
  const handleChange = (e) => {
    updateItemCount(name, Number(e.target.value));
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
        style={{ width: "75%" }}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label>{name}</Form.Label>
        <Form.Control type="number" defaultValue={0} onChange={handleChange} />
      </Form.Group>
    </Col>
  );
}
