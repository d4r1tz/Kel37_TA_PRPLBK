import React, {useContext} from 'react';
import './SeasonsPage.css';
import { OnePieceSeasonsContext, OnePieceSeasonsProvider } from '../../fetchAPI/fetchAPI';
import { Link } from 'react-router-dom';

export default function SeasonsPage({firstIndex, lastIndex}) {

    const ComponentSeasonPage = () => {

        const {dataSeasons} = useContext(OnePieceSeasonsContext);
    
        if (!dataSeasons) {
            return <p>Loading Screen ...</p>
        }
    
        return (
            <div style={{height: '550px'}}>
                <h1>SEASONS LIST</h1>
                {
                    dataSeasons.seasons.map((season, index) => {
                        if (index>=firstIndex && index<=lastIndex) {
                            return (
                                <Link to={`/episodes/${season.id}`} className="container-seasons" style={{ marginBottom: '20px' }} key={index}>
                                    <h3 className="h3-seasons">SEASON {index + 1}</h3>
                                    <h3 className="h3-seasons">{season.title}</h3>
                                </Link>
                            )
                        }
                    }).reduce((rows, component, index) => {
                        if (index % 6 === 0) {
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
            </div>
        );
    }

    return (
        <OnePieceSeasonsProvider APIUrl='https://one-piece-episodes.p.rapidapi.com/one_piece/seasons'>
            <ComponentSeasonPage />
        </OnePieceSeasonsProvider>
    );
}