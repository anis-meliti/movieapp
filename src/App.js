import React from 'react';
// *******Styles*********
import './App.css';
// ******Components*******
import Movies from './Components/Movies/Movies'
import Myheader from './Components/Myheader/Myheader';
import Movie from './Components/Movies/Movie/Movie'

function App() {
  return (
    <div>
      <Myheader />
      <Movies />
      <Movie />
    </div>
  );
}

export default App;
