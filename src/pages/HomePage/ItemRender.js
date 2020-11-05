import React from 'react';
import './styles.css';
import {FIND_MOVIE} from '../../TMDB';
const ItemRender = ({item}) => {
    const [movieImg, setMovieImg] = React.useState();
    React.useEffect(() => {
        async function handleMovieDB() {
            try {
                const {urlD, optionsD} = FIND_MOVIE(item);
                const response = await fetch(urlD, optionsD);
                const json = await response.json();
                setMovieImg(json.poster_path);
            } catch(err) {
                console.log(err);
            }
        }
        handleMovieDB();
    }, [movieImg, item]);
    
    return (
        <div className="home-poster-btn">
            <img src={movieImg?`https://image.tmdb.org/t/p/w500${movieImg}`:""} alt={`poster ${item}`}/>
        </div>
    ); 
}

export default ItemRender;
