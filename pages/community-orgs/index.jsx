import React, { useEffect } from 'react';
import useSwr from 'swr';

import { useRouter } from 'next/router'
import Link from 'next/link'

import { MapContext, MAP_ACTIONS } from 'components/MapContext';

import { getLayout } from 'components/MapLayout';

const fetcher = (...args) => fetch(...args).then(res => res.json());

//this is the data for the side of the map. however, it should only show up on click.
//will have to figure out how to do context to pass onClick so that it will show up
const CommunityOrg = ({ data }) => (  
  <div>
    {
      data.map((value) => 
        <p key={`${value.site_name}+${value.coordinates.lat}+${value.coordinates.lng}`}>        
        {value.Name ? `Name: ${value.Name}` : ''}{value.Name ? <br></br> : ''}        
        Address: {value.Address} <br></br> 
        {value.Type ? `Type: ${value.Type}` : ''}{value.Type ? <br></br> : ''}
        {value.Purpose ? `Purpose: ${value.Purpose}` : ''}{value.Purpose ? <br></br> : ''}
        {/* {value["Purpose	Neighborhood Associated With"] ? `Neighborhood Associated With: ${value["Purpose	Neighborhood Associated With"]}` : ''}{value.["Purpose	Neighborhood Associated With"] ? <br></br> : ''}
        {value["Website Contact Info"]? `Website Contact Info: ${value["Website Contact Info"]}` : ''}{value["Website Contact Info"] ? <br></br> : ''} */}
        <br></br><Link href="/community-orgs/[communityOrg]" as={`/community-orgs/${value.coordinates.lat},${value.coordinates.lng}`}>        
                <a>Link to this Info</a>
            </Link>
        </p>        
        )
      
    }
  </div>
);

function CommunityOrgsPage() {
  const { dispatch: dispatchMapState } = React.useContext(MapContext);
  const { data, error } = useSwr('/api/community-orgs', fetcher);
  if (error) {
    console.error('Error loading data from API for /api/community-orgs: ', error);
  }    

  useEffect(() => {
    const formattedData = (data || []).map((site) => ({
      key: `${site.site_name}+${site.coordinates.lat}+${site.coordinates.lng}`,
      output_key: `${site.site_name}+${site.coordinates.lat}+${site.coordinates.lng}`,
      name: site.name,   
      site_info: {
        site_name: site.site_name,
        type: site.Type,
        purpose_neighborhood_associated_with: site["Purpose	Neighborhood Associated With"],
        address: site.Location,
        website_contact_info: site["Website Contact Info"]
      },                   
      coordinates: {
        lat: site.coordinates.lat,
        lng: site.coordinates.lng,
      },
    }));
    dispatchMapState({ type: MAP_ACTIONS.SET_MARKERS, payload: formattedData });

    return () => {
      dispatchMapState({ type: MAP_ACTIONS.CLEAR_MARKERS });
    }
  }, [data, dispatchMapState]);

  return (
    <div className="sidebar-content">
      {error && 'Error loading content'}
      {!data && !error && 'Loading...'}
      {/* {!error && data && "data here"} */}
      {!error && data && <CommunityOrg data = {data}/>}
    </div>
  );

}

CommunityOrgsPage.getLayout = getLayout;

export default CommunityOrgsPage;
