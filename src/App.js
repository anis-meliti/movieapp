import React, { Component } from 'react';
// *******Styles*********
import './App.css';
// ******Components*******
import Handler from './Handler'



class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })

    }, 2000);

  }
  render() {
    return (
      <div>
        <Handler isLoading={this.state.isLoading} />

      </div>
    )
  }
}


export default App;
