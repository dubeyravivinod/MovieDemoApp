import './MovieList.css';
import img from './icon.png'

const MovieList = (props) => {
    return (
        <div className="CardDiv" 
            style={{
                backgroundImage: `url(${props.bg_image})`,
                width: '70%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: "100% 100%",

            }}
        
        >
            <div className="mainDiv">
                <img src={props.image} alt={props.movie_name} />
                <div>
                    <div className="desc">
                        <h1>{props.movie_name}</h1>
                        <h3>{props.year}, {props.director_name}</h3>
                    </div>
                        <div className="movielengtime">
                            <h4>{props.time}</h4>
                            <h4>{props.movie_type}</h4>
                        </div>
                    </div>
            </div>
            <div className="summary">
                <p>Set in a world where mystical creatures live side by side with humans. A human ... A detective must work with an Orc to find a powerful wand before evil creatures ...</p>
            </div>
            <div className='share'>
                <img src={img} alt="icon"></img>
            </div>
        </div>
    );
}

export default MovieList;