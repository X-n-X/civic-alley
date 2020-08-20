import React, { useEffect } from 'react';
import useSwr from 'swr';

import { useRouter } from 'next/router'
import Link from 'next/link'

import { MapMarkersContext } from 'components/MapMarkersContext';


//add another context that allows tracking what is in the info panel. It could possibly be a specific page in the pages folder
//url for each specific info box. so once you click on a specific info box it could take you to a page where the data is loaded. so you could copy url and send somebody a testing site
//more specific for each route: covid-testing-sites/"identifier" – Dynamic Routing using [] around the name of the file [site].jsx directly mapped to request.params. Max to send me next.js docs
//still make a context, but handle more from the page so it will be easier 
//we would link to the page so you wouldn't have a click handler, but the page itself will have a specific one it's looking at request?params="identifier"

import { getLayout } from 'components/MapLayout';

const fetcher = (...args) => fetch(...args).then(res => res.json());

//this is the data for the side of the map. however, it should only show up on click.
//will have to figure out how to do context to pass onClick so that it will show up
const TestingSites = ({ data }) => (  
  <div>
    {
      data.filter(item=>item.site_name==="AdvantageCare Kings Highway")//filtering the data here. but we want it to filter to just the item that's clicked.
        .map((value, idx) => <p key={idx}>
                
        Address: {value.address} <br></br> 
        {value.phone ? `Phone Number: ${value.phone}` : ''}{value.phone ? <br></br> : ''}
        You are {value.appointment_required ? 'required' : 'not required'} to have an appointment to get tested.<br></br>
        This testing site {value.antibody_testing ? 'provides' : 'does not provide'} antibody testing. <br></br>        
        Hours: <br></br>
        {value.sunday ? `Sunday: ${value.sunday}` : ''}{value.sunday ? <br></br> : ''}
        {value.monday ? `Monday: ${value.monday}` : ''}{value.monday ? <br></br> : ''}
        {value.tuesday ? `Tuesday: ${value.tuesday}` : ''}{value.tuesday ? <br></br> : ''}
        {value.wednesday ? `Wednesday: ${value.wednesday}` : ''}{value.wednesday ? <br></br> : ''}
        {value.thursday ? `Thursday: ${value.thursday}` : ''}{value.thursday ? <br></br> : ''}
        {value.friday ? `Friday: ${value.friday}` : ''}{value.friday ? <br></br> : ''}
        {value.saturday ? `Saturday: ${value.saturday}` : ''}{value.saturday ? <br></br> : ''}
        {value.additional_info ? `Additional Information: ${value.additional_info}` : ''}{value.additional_info ? <br></br> : ''}         
        {value.provider_url ? `URL: ` : ''}{value.provider_url ? <a href = {value.provider_url}>{value.provider_url}</a> : ''}{value.provider_url ? <br></br> : ''} 
        <Link href="/covid-testing-sites/[site]" as={`/covid-testing-sites/${value.site_name}?name=${value.site_name}`}>
            <a>Link to this Info</a>
        </Link>
      </p>)
      
    }
  </div>
);

function CovidTestingSitesPage() {
  const { setState: setMapMarkers } = React.useContext(MapMarkersContext);
  const { data, error } = useSwr('/api/testing-sites', fetcher);
  if (error) {
    console.error('Error loading data from API for /api/testing-sites: ', error);
  }    

  useEffect(() => {
    const formattedData = (data || []).map((site) => ({
      key: `${site.site_name}+${site.coordinates.lat}+${site.coordinates.lng}`,
      output_key: `${site.site_name}+${site.coordinates.lat}+${site.coordinates.lng}`,
      name: site.site_name,   
      site_info: {
        name: site.site_name, 
        provider_url: site.provider_url,
        additional_info: site.additional_info,
        address: site.address,
        phone: site.phone,
        monday: site.monday,
        tuesday: site.tuesday,
        wednesday: site.wednesday,
        thursday: site.thursday,
        friday: site.friday,
        saturday: site.saturday,
        sunday: site.sunday,
        screening_required: site.screening_required,
        appointment_required: site.appointment_required,
        antibody_testing: site.antibody_testing, 
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
      {!error && data && <TestingSites data = {data}/>}
    </div>
  );

}

CovidTestingSitesPage.getLayout = getLayout;

export default CovidTestingSitesPage;
