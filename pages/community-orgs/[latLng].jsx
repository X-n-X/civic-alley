import React, { useEffect, useMemo } from 'react';
import useSwr from 'swr';
import { useRouter } from 'next/router'

import { getLayout } from 'components/MapLayout';
import { MapContext, MAP_ACTIONS } from 'components/MapContext';
import { CommunityOrgInfo } from 'components/CommunityOrgInfo';

import { useCommunityOrgsSiteMarkers } from 'hooks/useCommunityOrgsSiteMarkers';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const latLongRegex = /^([-\d.]+),([-\d.]+)$/
const getLatLongFromPath = (path) => {
  const match = latLongRegex.exec(path) || []
  return {
    lat: parseFloat(match[1]),
    lng: parseFloat(match[2]),
  }
}

const CommunityOrgPage = () => {
  const router = useRouter()
  const { latLng } = router.query

  const coordinates = useMemo(() => getLatLongFromPath(latLng), [latLng]);

  const { mapState: { markers }, dispatch: dispatchMapState } = React.useContext(MapContext);

  useEffect(() => {
    console.log('setting center: ', coordinates)
    dispatchMapState({
      type: MAP_ACTIONS.SET_ACTIVE_MARKER,
      payload: coordinates,
    });

    return () => {
      dispatchMapState({ type: MAP_ACTIONS.CLEAR_ACTIVE_MARKER });
    }
  }, [coordinates]);

  const { data, error } = useSwr('/api/community-orgs', fetcher);

  if (error) {
    console.error('Error loading data from API for /api/community-orgs: ', error);
  }

  useCommunityOrgsSiteMarkers({ data, dispatchMapState });

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

  return (
    <div>
      {filteredItems.map((communityOrg) => (
        <CommunityOrgInfo orgSite={communityOrg} key={communityOrg.key} />
      ))}
    </div>
  )
}

CommunityOrgPage.getLayout = getLayout;

export default CommunityOrgPage;
