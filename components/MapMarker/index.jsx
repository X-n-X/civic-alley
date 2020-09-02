import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { startCase } from 'lodash';

import { MapPinIcon } from 'components/MapPinIcon';

export const MapMarker = ({ name, coordinates, page, page_link, selected }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [currentInfoOpen, setInfoOpen] = useState("");
  // const toggleInfo = useCallback((e) => {
  //   setIsInfoOpen((wasOpen) => !wasOpen);
  //   setInfoOpen(output_key);
  // }, [setIsInfoOpen]);

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
        // href="/covid-testing-sites/[testingSite]"
        // as={`/covid-testing-sites/${coordinates.lat},${coordinates.lng}`}
        href={page+`/`+page_link}
        as={`/${page}/${coordinates.lat},${coordinates.lng}`}
      >
        <a className="map-marker-dot">
          <MapPinIcon className="map-pin-icon" />
        </a>
      </Link>
    );
};
