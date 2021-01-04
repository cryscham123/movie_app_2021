import React from 'react';
import axios from "axios";
import Movies from "./Movies";
import "./Movies.css";
import Nav from "./Nav";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  makeBooks = async () => {
    const { data : { data: { movies }}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.makeBooks();
  }
  render()
  {
    const { isLoading, movies } = this.state;
    return <section className="container">
      <Nav />
      {isLoading
        ? <div className="loader">
          <span className="loader__text">
            loading...
            </span>
        </div>
        : <div className="movies">
          {
            movies.map(movie => {
              return <Movies
                key={movie.id}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                  />
        })
          }
        </div>
      }</section>;
  }
}

export default App;
