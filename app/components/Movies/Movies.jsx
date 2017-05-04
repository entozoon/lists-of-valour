import React from 'react';
import Movie from '../Movie/Movie';

class Movies extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      movies: []
    }

    this.getMovies();
  }

  getMovies () {
    var movieRef = this.props.database.ref('movies/');
    movieRef.on('value', snapshot => {
      const movies = this.state.movies.slice(); // slice() for immutability
      snapshot.forEach(movie => {
        //console.log(movie.key);
        //console.log(movie.val());
        movies.push(movie.val());
      });
      this.setState({
        movies: movies
      });
    });
  }

  render () {
    const movies = [];
    this.state.movies.map((movie, i) => {
      movies.push(<Movie key={i} movie={movie} />);
    });

    return (
      <div>
        {movies}
      </div>
    )
  }
}

export default Movies;
