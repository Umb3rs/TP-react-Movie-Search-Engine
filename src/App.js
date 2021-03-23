import React, {useState} from 'react'
// import axios from 'axios'
import './App.css'

import Search from './components/Search'

function App() {
  const [state, setState] = useState({
    s:"",
    results:[],
    selected: {}

  });
  const apiurl =" https://api.themoviedb.org/3/movie/550?api_key=2f071489721e98854152263cf924a450"

  // const search = (e) => {
  //   if (e.key === "Enter"){

  //   }
  // }

  const handleInput = (e) => {
    let s =e.target.value;

    setState(prevState => {
      return {...prevState, s: s }
    });
    console.log(state.s);
  }
  return (
    <div className="App">
      <div className="container">
        <header>
        <h1>The shrimp cocktail</h1>
        </header>
        <main>
          <Search handleInput={handleInput} />
        </main>
      </div>
    </div>
  );
}

export default App
