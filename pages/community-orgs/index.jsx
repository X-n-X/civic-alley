import React, { useEffect } from 'react';
import useSwr from 'swr';

import { MapMarkersContext } from 'components/MapMarkersContext';
import { getLayout } from 'components/MapLayout';

const fetcher = (...args) => fetch(...args).then(res => res.json());

//this is the data for the side of the map. however, it should only show up on click.
//will have to figure out how to do context to pass onClick so that it will show up
const CommunityOrg = ({ data }) => (  
  <div>
    {
      data.filter(item=>item.site_name==="StreetRidersNYC")//filtering the data here. but we want it to filter to just the item that's clicked.
        .map((value, idx) => <p key={idx}>

        {value.sunday ? `Name: ${value.site_name}` : ''}{value.site_name ? <br></br> : ''}        
        Address: {value.address} <br></br> 
        {value.type ? `Type: ${value.type}` : ''}{value.type ? <br></br> : ''}
        {value.purpose_neighborhood_associated_with ? `Purpose	Neighborhood Associated With: ${value.purpose_neighborhood_associated_with}` : ''}{value.purpose_neighborhood_associated_with ? <br></br> : ''}
        {value.website_contact_info? `Website Contact Info: ${value.website_contact_info}` : ''}{value.website_contact_info ? <br></br> : ''}</p>        
        )
      
    }
  </div>
);

function CommunityOrgsPage() {
  const { setState: setMapMarkers } = React.useContext(MapMarkersContext);    
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
    //console.log("formattedData",formattedData);
    setMapMarkers(formattedData);

    return () => {
      setMapMarkers([]);
    }
  }, [data, setMapMarkers]);

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
