import React from "react";
import Header from "../Header";

export default function Hero() {
  return (
    <div className="first-page">
      <Header />
      <Banner1 />
      <Heading />
    </div>
  );
}

function Heading() {
  return (
    <div className="text-container">
      <h1 className="three">MARVELPEDIA</h1>
      <span className="four">Unveiling Marvel's Mysteries Yoooo!</span>
    </div>
  );
}

function Banner1() {
  return <img className="Banner" src="/assets/image 1.png" alt="Banner" />;
}
