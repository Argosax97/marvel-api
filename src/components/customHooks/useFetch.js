import { useState, useEffect } from "react";

const useFetch = (api) => {
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  const getMovies = () => {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.data);
        setDatas(data.data.results);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovies();
  }, [api]);
  return { loading, datas};
};

export default useFetch;
