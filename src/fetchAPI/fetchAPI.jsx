import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const OnePieceSeasonsContext = createContext();

const OnePieceSeasonsProvider = ({ children, APIUrl, seasonIdCheck }) => {
  const [dataSeasons, setDataSeasons] = useState(null);

  const fetchSeasons = async () => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: `${APIUrl}`,
        headers: {
          'X-RapidAPI-Key': '6d38556de5msh96f71efba81b237p1c4337jsndd165ee99d6f',
          'X-RapidAPI-Host': 'one-piece-episodes.p.rapidapi.com',
        },
      });

      setDataSeasons(response.data);
    } catch (error) {
      console.error('Error fetching seasons:', error);
    }
  };

  useEffect(() => {
    console.log(seasonIdCheck);
    fetchSeasons();
  }, [APIUrl, seasonIdCheck]);

  return (
    <OnePieceSeasonsContext.Provider value={{ dataSeasons }}>
      {children}
    </OnePieceSeasonsContext.Provider>
  );
};

export { OnePieceSeasonsContext, OnePieceSeasonsProvider };