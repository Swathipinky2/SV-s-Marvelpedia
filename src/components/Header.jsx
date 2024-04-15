import React from "react";

export default function Header() {
  return (
    <div className="first-page">
      <div className="header ">
        <Logo />
        <Comics />
        <Characters />
        <Creators />
        <Events />
        <Stories />
        <Search />
      </div>
      <Banner1 />
      <Heading />
    </div>
  );
}

function Logo() {
  return <img className="Logo" src="assets/logo.png" alt="Logo"></img>;
}

function Comics() {
  return <span className="elements">COMICS</span>;
}

function Characters() {
  return <span className="elements">CHARACTERS</span>;
}

function Creators() {
  return <span className="elements">CREATORS</span>;
}

function Events() {
  return <span className="elements">EVENTS</span>;
}

function Stories() {
  return <span className="elements">STORIES</span>;
}

function Search() {
  return (
    <img
      className="elements"
      src="/assets/search icon.png"
      alt="Search Icon"
    ></img>
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
