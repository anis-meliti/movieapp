import React from 'react';
// *******Styles*********
import './App.css';
// ******Components*******
import Movies from './Components/Movies/Movies'
import Myheader from './Components/Myheader/Myheader';

function App() {
  return (
    <div>
      <Myheader />
      <Movies />
    </div>
  );
}

export default App;
