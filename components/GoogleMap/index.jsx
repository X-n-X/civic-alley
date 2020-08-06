import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';

import { MapMarker } from 'components/MapMarker';
import { MapMarkersContext } from 'components/MapMarkersContext';

import config from './mapConfig';

function getMapOptions() {
  return config;
}

function getCenter(center) {
  if(center == "")
    return {lat: 40.635,lng: -73.94};
  else
    return center;
}

var address = "";

function setCoordinates(address){    
  if(address !== ""){             
      //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${this.state.address}`,{
          method: "GET",
          dataType: "JSON",
          // headers: {
          //   "Content-Type": "application/json; charset=utf-8",
          // }
      })
      .then(response => response.json())
      .then(data => {           
        this.setState({ coordinates: {lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}});          
      });
  }
}

export function GoogleMap() {  
  const { markers } = useContext(MapMarkersContext); 
   

  return (
    <div className="google-map-container">
      <br></br>
      {/* <input value={this.state.address} onChange={this.setCoordinates}></input> */}
      <label for="address">Enter address</label>
      <input name ="address" value = {address} onChange={setCoordinates(address)}></input>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo" }}
        //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}
        defaultCenter={getCenter("")}
        defaultZoom={13}
        options={getMapOptions}
      >
       {markers.map((item) => (
          <MapMarker
            key={item.key}
            //text={item.name}            
            lat={ item.coordinates.lat}
            lng={ item.coordinates.lng}
            site_info= {item.site_info}             
          />
        ))}
      </GoogleMapReact>      
    </div>
  );
}


