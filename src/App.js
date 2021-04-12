import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
 
import NasaPhoto from "./NasaPhoto";
import {AppContainer} from './Styles'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=K0WoxlyKhHuS8X9jJ90PhQ16dFdsWZbiZ2VDuKMb')
      .then((response) => {
        console.log(response)
        setData(response.data)
      }).catch((error) => { console.log(error) })
  }, [])

  return (
    <div className="App">
       <AppContainer>
       <NasaPhoto />
       </AppContainer>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
