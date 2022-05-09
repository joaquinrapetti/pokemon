import React from "react";
import { Container } from "react-bootstrap";
import Wallpaper from "../../assets/Wallpaper.jpg";
import "./Hero.css";

const Hero = ({ text }) => {
  return (
    <div className="hero-background">
      <Container className="hero-container">
        <h1>{text}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          commodi quisquam quia pariatur ex maxime soluta, unde tempore totam,
          qui eos harum delectus dignissimos molestias ducimus. Ut quam totam
          vel. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati, commodi quisquam quia pariatur ex maxime soluta, unde
          tempore totam, qui eos harum delectus dignissimos molestias ducimus.
        </p>
      </Container>
    </div>
  );
};

export default Hero;
