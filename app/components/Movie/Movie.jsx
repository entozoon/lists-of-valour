import React from 'react';

class Movie extends React.Component {
  constructor (props) {
    super(props);
    this.state = props.movie;
  }
  render () {
    return (
      <div>
        {this.state.title}
      </div>
    )
  }
}

export default Movie;
