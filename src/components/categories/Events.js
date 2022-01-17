import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import "./Cards/Cards.css";
// import "./Events.css";

const hash = "64976ea740e60709925da7e9a45facf9a8c88756";
const apikey = "dc07e2ea69c001b52e30eca256007646";
const url = `http://gateway.marvel.com/v1/public/events?&apikey=${apikey}&hash=${hash}`;
const Events = () => {
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
                <Link to={`/events/${data.name}`} className="card-link">
                  <h2>{data.title}</h2>
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

export default Events;
