import React from 'react';
import Movie from '../Movie/Movie';

class Movies extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      movies: []
    }

    this.getMoviesAndKeepUpdated();
  }

  // Rewrite this elsewhere as a pure function, right?
  getMoviesAndKeepUpdated () {
    var movieRef = this.props.database.ref('movies/');
    movieRef.on('value', snapshot => {
      // This fires whenever the db changes! :O
      const movies = this.state.movies.slice(); // slice() for immutability
      snapshot.forEach(movie => {
        // snatch up the data and jam in the key too
        const movieObj = movie.val();
        movieObj.key = movie.key;
        movies.push(movieObj);
      });
      console.log(movies);
      this.setState({
        movies: movies
      });
    });
  }

  render () {
    const movies = [];
    this.state.movies.map((movie, i) => {
      // Preeeetty sure I shouldn't be tossing the database ref down
      movies.push(<Movie key={i} movie={movie} database={this.props.database} />);
    });

    return (
      <div>
        {movies}
      </div>
    )
  }
}

export default Movies;
