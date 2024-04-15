import React from "react";

const info = ` This is me Swathi! Vivi is little rat and cutie and hhaaha. Vivi full
          name is Viviane and from that name we created Viviane book store. In
          this book store you can buy Viviane books for low cost. If you visit
          Viviane madam she will give you book for free.`;

export default function NextPage() {
  return (
    <>
      <div className="next-page">
        <div className="container">
          <Cards image="/assets/cards/comics.png" title="COMICS" Info={info} />

          <Cards
            image="/assets/cards/characters.png"
            title="CHARACTORS"
            Info={info}
          />

          <Cards
            image="/assets/cards/creators.png"
            title="CREATOR"
            Info={info}
          />

          <Cards
            image="/assets/cards/stories.png"
            title="STORIES"
            Info={info}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

function Cards({ image, title, Info }) {
  return (
    <div className="card-container">
      <img className="card-img" src={image} alt="Comics" />
      <div className="card-info">
        <h1>{title}</h1>
        <p>{info}</p>
      </div>
      <hr />
      <h1 className="arrow">&#8594;</h1>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p> &#169; 2024 SV's Marvelpedia, All Rights Reserved</p>
    </footer>
  );
}
