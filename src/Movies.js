import React from 'react';

function Movies({ title, summary, poster, genres }) {
    const genreView = genres.slice(0, 4);
    return <div className="moviesContainer">
    <div className="movies__movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__info">
            <h3 className="movie__title">{title}</h3>
            <ul className="genres">
                {genreView.map((genre, index) => <li key={index} className="genres__genre">{genre}&nbsp;</li>)
                }</ul>
            <h3 className="movie__summary">
                {summary.length > 100 ? summary.substring(0,100)+"..." : summary}
            </h3>
        </div>
        </div>
        <div className="friends"></div>
    </div>
}

export default Movies;