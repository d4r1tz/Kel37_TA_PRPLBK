import React, {useContext} from 'react';
import './EpList.css';
import { Link, useParams } from 'react-router-dom';
import { OnePieceSeasonsContext, OnePieceSeasonsProvider } from '../../fetchAPI/fetchAPI';

export default function EpisodeListPage() {
    const { seasonId } = useParams();

    const ComponentEpisodeList = () => {
        const {dataSeasons} = useContext(OnePieceSeasonsContext);
    
        if (!dataSeasons) {
            return <p>Loading Screen ...</p>
        }
    
        const componentsPerRow = 5;
    
        return (
            <div style={{height: '450px', marginBottom:'70px'}}>
                <h1>EPISODES LIST</h1>
                {
                    dataSeasons.episodes.map((ep, index) => (
                        <Link key={index} to={`/epDetail/${ep.season_id}/${index}`} className="container-episodes" style={{paddingTop:'20px', paddingLeft:'20px', paddingRight:'20px', marginBottom: '20px' }}>
                            <img src={ep.image} style={{height:"150px", width:"150px"}}/>
                            <h3 className="h3-episodes">EP {ep.episode}</h3>
                            <h3 className="h3-episodes">{ep.title}</h3>
                        </Link>
                    )).reduce((rows, component, index) => {
                        if (index % componentsPerRow === 0) {
                            rows.push([]);
                        }
                        rows[rows.length - 1].push(component);
                        return rows;
                    }, []).map((row, rowIndex) => (
                        <div key={rowIndex} style={{ display: 'flex', marginBottom: '20px' }}>
                            {row}
                        </div>
                    ))
                }
                <div style={{width:"100%",height:"20px"}}></div>
            </div>
        );
    }

  return (
    <OnePieceSeasonsProvider APIUrl={`https://one-piece-episodes.p.rapidapi.com/one_piece/episodes_by_season/${seasonId}`} seasonIdCheck={seasonId}>
        <ComponentEpisodeList />
    </OnePieceSeasonsProvider>
  );
}