import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import "./Cards/Cards.css";
// import "./Creators.css";

const hash = "64976ea740e60709925da7e9a45facf9a8c88756";
const apikey = "dc07e2ea69c001b52e30eca256007646";
const url = `http://gateway.marvel.com/v1/public/creators?&apikey=${apikey}&hash=${hash}`;
const Creators = () => {
  const { datas } = useFetch(url);
  return (
    <>
      <section className="cards-container">
        {datas.map((data) => {
          return (
            <div key={data.id} className="cards">
              <img
                src={data.thumbnail.path + ".jpg"}
                alt={data.title}
                width="250px"
              />

              <div className="card-name">
                <Link to={`/creators/${data.name}`} className="card-link">
                  <h2>{data.fullName}</h2>
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

export default Creators;
