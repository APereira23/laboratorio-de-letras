import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "home",
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Display activePage={this.state.activePage}/>
        <Footer />
      </div>
    );
  }
}

export default App;
