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
          'X-RapidAPI-Key': '4beb7b230fmshbe9b190d607e724p1c5f8bjsn42956d8ee953',
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