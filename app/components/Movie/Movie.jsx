import React from 'react';

class Movie extends React.Component {
  constructor (props) {
    super(props);
    this.state = props.movie;
  }

  // Rewrite this elsewhere as a pure function, right?
  setMovie () {
    let updates = {};
    updates['/movies/' + this.props.movie.key + '/title'] = this.state.title;
    this.props.database.ref().update(updates);
  }

  handsAreTyping (e) {
    this.setState({
      title: e.target.value
    });

    this.setMovie();
  }

  render () {
    if (!this.state.title) return null;

    return (
      <div>
        <input
          value={this.state.title}
          onChange={this.handsAreTyping.bind(this)}
        />
      </div>
    )
  }
}

export default Movie;