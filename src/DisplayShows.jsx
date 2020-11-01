import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios'

const DisplayShows = () => {
  const [series, setSeries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get('https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga')
      setSeries(response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'])
    }

    fetchData();
  }, [])

  let displayData = series.map((show) => {
    return (
      <div class="display-show" data-cy="display-show">
        <img
          src={`${show.content.images.landscape.url}`}
          alt="tv-serie-card"
          data-cy="image"
        ></img>
      </div>
    );
  });

  return <div className="container">{displayData}</div>
};




export default DisplayShows
