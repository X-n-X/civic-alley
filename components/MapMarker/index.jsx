import React from 'react';
import Link from 'next/link';

import { MapPinIcon } from 'components/MapPinIcon';

export const MapMarker = ({ pageLink, selected }) => {
  return selected
    ? (
      <div className="map-marker-container">
        <MapPinIcon className="map-pin-icon map-pin-icon--selected" />
        {/*
          UNCOMMENT THIS TO ADD SOME DETAILS TO THE MAP ICON
        <div
          className="map-marker-info"
        >
          {JSON.stringify(coordinates)}
          {name ? `${startCase(name)}` : ''}<br></br><br></br>
          {siteInfo.address}
        </div>
        */}
      </div>
    )
    : (
      <Link
        href={pageLink.href}
        as={pageLink.as}
      >
        <a className="map-marker-dot">
          <MapPinIcon className="map-pin-icon" />
        </a>
      </Link>
    );
};
