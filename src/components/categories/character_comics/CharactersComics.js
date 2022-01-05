import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import "./CharactersComics.css"
const hash = "64976ea740e60709925da7e9a45facf9a8c88756";
const apikey = "dc07e2ea69c001b52e30eca256007646";

const CharacterComics = () => {
  let id = useParams();
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id.id}/comics?apikey=${apikey}&hash=${hash}`;

  const { datas } = useFetch(url);

  return (
    <>
      <section className="characters-comics">
        {datas.map((data) => {
          return (
            <div key={data.id} className="character-comics">
              
                <img
                  src={data.thumbnail.path + ".jpg"}
                  alt={data.name}
                  width="100%"
                />
              
              <div className="character-comics-title">
                <h2>{data.title}</h2>
                <span>page count {data.pageCount}</span>
                <span>{data.prices[0].price} $</span>
              </div>
            </div>
          );
        })}
      </section>
      <div className="pagination"> pagination</div>
    </>
  );
};

export default CharacterComics;
