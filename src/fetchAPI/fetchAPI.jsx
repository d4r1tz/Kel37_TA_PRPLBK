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
          //List substitute keys if expired
          //e84f1362b2mshfefe134ef9d5ebcp1ad6e0jsn45ddfdccca18
          //96a118adf2msh586368af76efeb6p1d74ddjsn3f9e3061cf3d
          //84901b8608mshe4b8b98c2c78c6ep119b84jsne99d30a5978d
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