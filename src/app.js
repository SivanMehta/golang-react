import React, { Component, Fragment } from 'react';

export default class App extends Component {
  constructor(...props) {
    super(...props);
  }

  render() {
    return (
      <Fragment>
        <h1>A cool title</h1>
        <p>A cool subtitle</p>
      </Fragment>
    )
  }
}