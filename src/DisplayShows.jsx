import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios'

const DisplayShows = () => {
  const [series, setSeries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get('https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga')
      debugger
      setSeries(response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'])
    }

    fetchData();
  }, [])

  return (
    <div>{series.map((serie) => {
      return (
        <div className="display-show" data-cy="display-show">
          <img
            src={serie.content.images.landscape.url}
            alt={serie.id}
            key={serie.id}
          />
        </div>
      );
    })}</div>
  )
}




export default DisplayShows
