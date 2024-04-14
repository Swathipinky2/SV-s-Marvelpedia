import React from "react";

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <Heading />
      <Banner2 />
    </>
  );
}

function Header() {
  return (
    <h1 style={{ display: "block", backgroundColor: "black", height: "80px" }}>
      This is Header
    </h1>
  );
}

function Banner() {
  return (
    <div className="Container">
      <img className="Banner" src="image 1.png" alt="banner" />
    </div>
  );
}

function Heading() {
  return (
    <div className="text-container">
    <h1>
      Lorem
      <span style={{ fontSize: " 20px", }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vivi and Swathi are good girls You know....
      </span><br />
      ipsum dolor
    </h1>
    </div>
  );
}

function Banner2() {
  return <img src="wallpaper.png" alt="Banner2"></img>;
}
