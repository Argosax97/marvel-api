import React from "react";
import useFetch from "../customHooks/useFetch";
import "./Events.css";

const hash = "64976ea740e60709925da7e9a45facf9a8c88756";
const apikey = "dc07e2ea69c001b52e30eca256007646";
const url = `http://gateway.marvel.com/v1/public/events?&apikey=${apikey}&hash=${hash}`;
const Events = () => {
  const { datas } = useFetch(url);
  return (
    <>
      <section className="events-container">
        {datas.map((data) => {
          return (
            <div key={data.id} className="events-item">
              <img
                src={data.thumbnail.path + ".jpg"}
                alt={data.title}
                width="250px"
              />

              <div className="character-name">
                <h2>{data.title}</h2>
              </div>
            </div>
          );
        })}
      </section>
      <div className="pagination"> pagination</div>
    </>
  );
};

export default Events;
