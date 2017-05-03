import React from 'react';

class Tinker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: (this.props.value ? this.props.value : '')
    }
  }
  // hands are typing!
  onChangeValue(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    //const { name } = this.props;
    return (
      <div>
        {/*
        <label
          htmlFor={this.props.name}
        >
          {this.props.name}
        </label>
        */}

        <input
          name={this.props.name}
          placeholder={this.props.name}
          value={this.state.value}
          onChange={this.onChangeValue.bind(this)}
        />

        <small> ⇒ {this.state.value}</small>
      </div>
    )
  }
}

class AppComponent extends React.Component {
  render () {
    return (
      <div>
        <Tinker name="Hail who?" />
        <Tinker name="Hail whom?" value="Satan" />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
