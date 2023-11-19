import React, {useState, useEffect, useContext} from "react";
import { OnePieceSeasonsContext, OnePieceSeasonsProvider } from "../../fetchAPI/fetchAPI";
import { useParams } from 'react-router-dom';

export default function EpisodeDetailPage() {

    const { seasonId } = useParams();
    const {indexArr} = useParams();

    const EpDetailComp = () => {
        const {dataSeasons} = useContext(OnePieceSeasonsContext);

        if (!dataSeasons) {
            return <p>Loading Screen ...</p>
        }

        return (
            <div>
                <h1>Detail Episode</h1>
                {
                    dataSeasons.episodes.map((ep,index) => {
                        if (index === parseInt(indexArr,10)) {
                            return (
                                <div key={index}>
                                    <img src={ep.image} style={{height:"150px", width:"150px"}}/>
                                    <h2>Episode {ep.episode}</h2>
                                    <h2>{ep.title}</h2>
                                    <div style={{height:"40px", width:"100%"}}></div>
                                    <p>{ep.description}</p>
                                </div>
                            )
                        }
                    })
                }       
            </div>  
        )
    }
    return (
        <OnePieceSeasonsProvider APIUrl={`https://one-piece-episodes.p.rapidapi.com/one_piece/episodes_by_season/${seasonId}`}  seasonIdCheck={seasonId}>
            <EpDetailComp />
        </OnePieceSeasonsProvider>
    );
}