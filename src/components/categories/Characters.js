import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import "./Cards/Cards.css";

const hash = "64976ea740e60709925da7e9a45facf9a8c88756";
const apikey = "dc07e2ea69c001b52e30eca256007646";
const url = `http://gateway.marvel.com/v1/public/characters?&apikey=${apikey}&hash=${hash}`;
const Characters = () => {
  const { datas } = useFetch(url);
  return (
    <>
      <section className="cards-container">
        {datas.map((data) => {
          return (
            <div key={data.id} className="cards">
              <img src={data.thumbnail.path + ".jpg"} alt={data.name} />

              <div className="card-name">
                <Link to={`/characters/${data.id}`} className="card-link">
                  <h2>{data.name}</h2>
                </Link>
              </div>
            </div>
          );
        })}
        <div className="pagination"> pagination</div>
      </section>
    </>
  );
};

export default Characters;
