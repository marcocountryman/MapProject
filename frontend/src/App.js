import React, { useState, useEffect } from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaMapPin, FaStar } from 'react-icons/fa';
import './App.css';
import axios from 'axios';

function App() {
  const [ showPopup, setShowPopup ] = useState(true);
  const [ pins, setPins ] = useState([]);

  useEffect( () => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pins");
        setPins(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getPins();
  }, [])




  return (
    <div className="App">
      <Map
      initialViewState={{
        longitude: -73.985428,
        latitude: 40.748817,
        zoom: 12
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      >
      <Marker longitude={-73.985428} latitude={40.748817} anchor="bottom" >
        <FaMapPin className= "map-pin"/>
      </Marker>
       {/* {showPopup && (
      <Popup longitude={-73.985428} latitude={40.748817}
        anchor="left"
        className = "popup"
      >
        <div className = "card">
          <span>Place</span>
          <span>Empire State Building</span>
          <span>Review</span>
          <span>My Summary</span>
          <div className='stars'>
            <span>Rating: </span>
            <FaStar className = "star"/>
            <FaStar className = "star"/>
            <FaStar className = "star"/>
            <FaStar className = "star"/>
            <FaStar className = "star"/>
          </div>
          <span>Information</span>
        </div>
      </Popup>)}   */}
    </Map>
    </div>
  );
}

export default App;