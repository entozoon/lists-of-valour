import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App';
var fs = require('fs');

const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

// Initialize Firebase
// I know this stuff shouldn't be in renderer.js but not sure how to pass db otherwise
try {
  //test to see if settings exist
  var path = 'firebase.config.json';
  fs.openSync(path, 'r+');
  var data = fs.readFileSync(path);
  var config = JSON.parse(data);

  firebase.initializeApp(config);
  const database = firebase.database();

  ReactDOM.render(
    <App database={database} />,
    document.getElementById('app')
  );

} catch(err) {
  console.log(err);
}
