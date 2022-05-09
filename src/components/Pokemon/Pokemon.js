import React from "react";
import "./Pokemon.css";
import { Card, Button } from "react-bootstrap";

const Pokemon = ({ image, name, index }) => {
  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Description of {name}</Card.Text>
        <Card.Text className="py-3">#{index}</Card.Text>
        <Button variant="primary w-100">Catch!</Button>
      </Card.Body>
    </Card>
  );
};

export default Pokemon;
