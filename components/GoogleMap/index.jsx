import React, { useContext, useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import useSwr from 'swr';
import { useRouter } from 'next/router'
import Link from 'next/link'

import { MapMarker } from 'components/MapMarker';
import { MapMarkersContext } from 'components/MapMarkersContext';
import { ClickedItemContext } from 'components/ClickedItemContext';

import config from './mapConfig';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function getMapOptions() {
  return config;
}

export function GoogleMap() {  
  const { markers } = useContext(MapMarkersContext);    
  const [newAddress, setNewAddress] = useState("");
  const [markerClick, setMarkerClick] = useState("");
  const [currentPointClicked, addCurrentPointClicked] = useState([]);
  const [center, setCenter] = useState({lat: 40.635,lng: -73.94});
  const [zoom, setZoom] = useState(13);
  const { clicked_item,setState: setClickedItem } = React.useContext(ClickedItemContext);

  useEffect(() => {        
    if(newAddress !== ""){
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAJOTmiaxGzBHyK-MI9o3jRSwnHq0u-MvU&address=${newAddress}`,{
          method: "GET",
          dataType: "JSON",
      })
      .then(response => response.json())
      .then(data => {
        setCenter({lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}); 
        setZoom(14);
      });
    }
    else if(markerClick !== ""){
      console.log("called", markerClick)
      setCenter({lat:  markerClick.lat, lng: markerClick.lng}); 
      setZoom(14);
      var clicked_items = currentPointClicked;
      clicked_items.push(markerClick);
      addCurrentPointClicked(clicked_items);
      //setClickedItem(clicked_items);
      // console.log("set clicked item",clicked_items)
      console.log(currentPointClicked);
      setMarkerClick("");
    }
    if(currentPointClicked.length > 0){
      setClickedItem(currentPointClicked[currentPointClicked.length-1]);      
    }

      return () => {
        setClickedItem("");
      }
    }, [clicked_item,setClickedItem]);

  

  return (
    <div className="google-map-container">            
      {<input id="address"></input>}
      {<button onClick={() => setNewAddress(document.getElementById('address').value)}>Change Center</button>}      
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAJOTmiaxGzBHyK-MI9o3jRSwnHq0u-MvU" }}
        //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}
        center={center}
        // defaultZoom={13}
        zoom={zoom}
        options={getMapOptions}
      >
       {markers.map((item) => (
        //  <div onClick = {()=>setMarkerClick({lat: item.coordinates.lat,lng: item.coordinates.lng})}>
          <MapMarker
            key={item.key}
            //text={item.name}            
            lat={ item.coordinates.lat}
            lng={ item.coordinates.lng}
            output_key = {item.output_key}            
            name = {item.name}
            // coordinates = {item.coordinates}      
            site_info= {item.site_info}
            function_to_run = {()=>setMarkerClick({name: item.name, site_info: item.site_info, lat: item.coordinates.lat,lng: item.coordinates.lng})}
          />                    
        ))}
      </GoogleMapReact>      
    </div>
  );
}


