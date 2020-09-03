import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router'

import { getLayout } from 'components/MapLayout';
import { MapMarkersContext } from 'components/MapMarkersContext';
import { MapContext, MAP_ACTIONS } from 'components/MapContext';

import useSwr from 'swr';
import Link from 'next/link'

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
  const { communityOrg } = router.query

  const coordinates = useMemo(() => getLatLongFromPath(communityOrg), [communityOrg]);

  const { mapState, dispatch } = React.useContext(MapContext);
  useEffect(() => {
    console.log('setting center: ', coordinates)
    dispatch({
      type: MAP_ACTIONS.SET_ACTIVE_MARKER,
      payload: coordinates,
    });
  }, [coordinates]);

  const [formattedFilteredData, setFormattedFilteredData] = useState([]);

  const { setState: setMapMarkers } = React.useContext(MapMarkersContext);
  const { data, error } = useSwr('/api/community-orgs', fetcher);

  if (error) {
    console.error('Error loading data from API for /api/community-orgs: ', error);
  }

  useEffect(() => {
    const formattedData = (data || []).map((site) => ({
        page: "community-orgs",
        page_link: "",
        key: `${site.site_name}+${site.coordinates.lat}+${site.coordinates.lng}`,
        output_key: `${site.site_name}+${site.coordinates.lat}+${site.coordinates.lng}`,
        name: site.Name,   
        site_info: {
          site_name: site.Name,
          type: site.Type,
          purpose: site.Purpose,
          neighborhood_associated_with: site["Neighborhood Associated With"],
          address: site.Location,
          website: site.Website,
          contact_info: site["Contact Info"]
        },                   
        coordinates: {
          lat: site.coordinates.lat,
          lng: site.coordinates.lng,
        },
      }));

    dispatch({ type: MAP_ACTIONS.SET_MARKERS, payload: formattedData });
  }, [data, setMapMarkers, setFormattedFilteredData, coordinates]);

  useEffect(() => {
    const filteredData = Array.isArray(mapState.markers) && mapState.markers.filter((site) => (
      site.coordinates.lat === coordinates.lat && site.coordinates.lng === coordinates.lng
    ))
    setFormattedFilteredData(filteredData);
  }, [mapState.markers, coordinates])

  useEffect(() => () => {
    dispatch({ type: MAP_ACTIONS.CLEAR_ACTIVE_MARKER });
  }, [])

  console.log('ffData: ', formattedFilteredData)

  return (
    <div>
      {formattedFilteredData.map((communityOrg) => {
        const { site_info } = communityOrg
        return (
          <p key={`${communityOrg.Name}+${communityOrg.coordinates.lat}+${communityOrg.coordinates.lng}`}>            
            {site_info.site_name ? `Name: ${site_info.site_name}` : ''}{site_info.site_name ? <br></br> : ''}        
            Address: {site_info.address} <br></br> 
            {site_info.type ? `Type: ${site_info.type}` : ''}{site_info.type ? <br></br> : ''}
            {site_info.purpose ? `Purpose: ${site_info.purpose}` : ''}{site_info.purpose ? <br></br> : ''}
            {site_info.neighborhood_associated_with ? `Neighborhood Associated With: ${site_info.neighborhood_associated_with}` : ''}{site_info.neighborhood_associated_with ? <br></br> : ''}
            {site_info.website? `URL: `: ''}{site_info.website ? <a href = {site_info.website}>{site_info.website}</a> : ''}{site_info.website ? <br></br> : ''}        
            {site_info.contact_info? `Contact Info: `: ''}{site_info.contact_info&&site_info.contact_info.includes("@") ? <a href = {`mailto:${site_info.contact_info}`}>{site_info.contact_info}</a> : ''}
              {site_info.contact_info&&!site_info.contact_info.includes("@") ? <a href = {site_info.contact_info}>{site_info.contact_info}</a> : ''}{site_info.contact_info ? <br></br> : ''}        
            <br></br><Link href="/community-orgs/[communityOrg]" as={`/community-orgs/${communityOrg.coordinates.lat},${communityOrg.coordinates.lng}`}>
                <a>Link to this Info</a>
            </Link>  
          </p>
          // site_name
          // type
          // purpose
          // neighborhood_associated_with
          // address
          // website
          // contact_info
        )
      })}
    </div>
  )
}

CommunityOrgPage.getLayout = getLayout;

export default CommunityOrgPage;