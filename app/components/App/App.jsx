import React from 'react';
import Movies from '../Movies/Movies';

class AppComponent extends React.Component {
  constructor (props) {
    super(props);
    /*
    var movieRef = database.ref('movies/');
    movieRef.on('value', snapshot => {
      console.log(snapshot.key);
      console.log(snapshot.val());
    });
    */
  }

  render () {
    return (
      <div>
        <Movies database={this.props.database} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
