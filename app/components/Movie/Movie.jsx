import React from 'react';

class Movie extends React.Component {
  constructor (props) {
    super(props);
    this.state = props.movie;
  }

  // Rewrite this elsewhere as a pure function, right?
  setMovie () {
    let updates = {};
    // Update: It is updating the existing one, but movieOne and movieTwo
    // are currently the only ones in the data structure.. so it can't create new
    console.log('Update: ' + '/movies/' + this.props.movie.key + '/title');
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
