// Latest Commit
import React, { Component } from 'react';
import './App.css'
import Attribute from './components/Attribute';
import Collection from './components/Collection'
import Header from './components/Header';
import KeyBoard from './components/KeyBoard';

class App extends Component {
  // sadsdadassadadsad
  render() {
    return (
      <>
      <div className="app">
      <Header/>
      <KeyBoard/>
      <Attribute/>
      <Collection/>
      </div>
      </>
    );
  }
}

export default App;