import React from 'react';
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaMapPin } from 'react-icons/fa';
import './App.css';

function App() {
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
    </Map>
    </div>
  );
}

export default App;