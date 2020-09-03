import React, { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router'
import useSwr from 'swr';

import { getLayout } from 'components/MapLayout';
import { MapContext, MAP_ACTIONS } from 'components/MapContext';
import { TestingSiteInfo } from 'components/TestingSiteInfo';

import { useCovidTestingSitesMarkers } from 'hooks/useCovidTestingSitesMarkers';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const latLongRegex = /^([-\d.]+),([-\d.]+)$/
const getLatLongFromPath = (path) => {
  const match = latLongRegex.exec(path) || []
  return {
    lat: parseFloat(match[1]),
    lng: parseFloat(match[2]),
  }
}

const TestingSitePage = () => {
  const router = useRouter()
  const { latLng } = router.query

  const coordinates = useMemo(() => getLatLongFromPath(latLng), [latLng]);

  const { mapState: { markers }, dispatch } = React.useContext(MapContext);
  useEffect(() => {
    dispatch({
      type: MAP_ACTIONS.SET_ACTIVE_MARKER,
      payload: coordinates,
    });
  }, [coordinates]);

  const { data, error } = useSwr('/api/testing-sites', fetcher);

  if (error) {
    console.error('Error loading data from API for /api/testing-sites: ', error);
  }

  useCovidTestingSitesMarkers({ data, dispatchMapState: dispatch });

  const filteredItems = useMemo(
    () => {
      return Array.isArray(markers)
        ? markers.filter(
          (marker) => marker.coordinates.lat === coordinates.lat
            && marker.coordinates.lng === coordinates.lng
        )
        : []
    },
    [markers, coordinates],
  );

  useEffect(() => () => {
    dispatch({ type: MAP_ACTIONS.CLEAR_ACTIVE_MARKER });
  }, [])

  return (
    <div>
      {filteredItems.map((site) => (
        <TestingSiteInfo site={site} key={site.key} />
      ))}
    </div>
  )
}

TestingSitePage.getLayout = getLayout;

export default TestingSitePage;
