import React, { useState, useEffect } from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaMapPin, FaStar } from 'react-icons/fa';
import './App.css';
import axios from 'axios';
import { format } from "timeago.js";

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
        {pins.map( (pin) => {
          return (
            <>
              <Marker key = {pin._id} longitude={pin.long} latitude={pin.lat} anchor="bottom" >
                  <FaMapPin className= "map-pin"/>
              </Marker>
              
              <Popup key = {pin._id} longitude={pin.long} latitude={pin.lat}
                anchor="left"
                className = "popup"
              >
                <div className = "card">
                  <span>{pin.title}</span>
                  <span>{pin.desc}</span>
                <div className='stars'>
                  <span>Rating: </span>
                  <FaStar className = "star"/>
                  <FaStar className = "star"/>
                  <FaStar className = "star"/>
                  <FaStar className = "star"/>
                  <FaStar className = "star"/>
                </div>
                <span>Uploaded by {pin.username} at {format(pin.createdAt)}</span>
                </div>
              </Popup>
            </>
        )})}


      
    </Map>
    </div>
  );
}

export default App;