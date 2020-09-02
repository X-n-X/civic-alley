import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';

import { MapMarker } from 'components/MapMarker';
import { MapContext } from 'components/MapContext';

import config from './mapConfig';

const DEFAULT_CENTER = { lat: 40.635, lng: -73.94 };

function getMapOptions() {
  return config;
}

export function GoogleMap() {
  const { mapState } = useContext(MapContext);
  console.log('mapstate?', mapState);

  return (
    <div className="google-map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAJOTmiaxGzBHyK-MI9o3jRSwnHq0u-MvU" }}
        //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}
        defaultCenter={DEFAULT_CENTER}
        center={mapState.center || undefined}
        defaultZoom={13}
        zoom={mapState.zoom || undefined}
        options={getMapOptions}
      >
       {mapState.markers.map((item) => (
        //  <div onClick = {()=>setMarkerClick({lat: item.coordinates.lat,lng: item.coordinates.lng})}>
          <MapMarker
            key={item.key}
            coordinates={item.coordinates}
            lat={ item.coordinates.lat}
            lng={ item.coordinates.lng}
            output_key={item.output_key}
            name={item.name}
            siteInfo={item.site_info}
            page={item.page}
            page_link={item.page_link}
            selected={
              mapState.activeMarker
              && (
                mapState.activeMarker.lat === item.coordinates.lat
                && mapState.activeMarker.lng === item.coordinates.lng
              )
            }
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
