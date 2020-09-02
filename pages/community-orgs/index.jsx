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
        <p key={`${value.Name}+${value.coordinates.lat}+${value.coordinates.lng}`}>        
        {value.Name ? `Name: ${value.Name}` : ''}{value.Name ? <br></br> : ''}        
        Address: {value.Location} <br></br> 
        {value.Type ? `Type: ${value.Type}` : ''}{value.Type ? <br></br> : ''}
        {value.Purpose ? `Purpose: ${value.Purpose}` : ''}{value.Purpose ? <br></br> : ''}
        {value["Neighborhood Associated With"] ? `Neighborhood(s) Associated With: ${value["Neighborhood Associated With"]}` : ''}{value["Neighborhood Associated With"] ? <br></br> : ''}        
        {value["Website"]? `URL: `: ''}{value["Website"] ? <a href = {value["Website"]}>{value["Website"]}</a> : ''}{value["Website"] ? <br></br> : ''}        
        {value["Contact Info"]? `Contact Info: `: ''}{value["Contact Info"]&&value["Contact Info"].includes("@") ? <a href = {`mailto:${value["Contact Info"]}`}>{value["Contact Info"]}</a> : ''}
        {value["Contact Info"]&&!value["Contact Info"].includes("@") ? <a href = {value["Contact Info"]}>{value["Contact Info"]}</a> : ''}{value["Contact Info"] ? <br></br> : ''}        
        <Link href="/community-orgs/[communityOrg]" as={`/community-orgs/${value.coordinates.lat},${value.coordinates.lng}`}>
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
      page: "community-orgs",
      page_link: "[communityOrg]",
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
