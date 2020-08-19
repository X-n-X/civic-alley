import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { MapMarkersContext } from 'components/MapMarkersContext';
import useSwr from 'swr';
import Link from 'next/link'

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Post = () => {
  const router = useRouter()
  const { pid, name } = router.query
  const { data, error } = useSwr('/api/testing-sites', fetcher);
  const [testing_site, setTestingSite] = useState("");  

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
    console.log("formattedData",formattedData);
    if(formattedData.filter(item=>item.name===name) !== undefined)
      setTestingSite(formattedData.filter(item=>item.name===name)[0].site_info);
  }, [data]);
  console.log("testing site",testing_site)
  //console.log(testing_site.site_info)  

  return <div>
    {
      <p>                
        Address: {testing_site.address} <br></br> 
        {testing_site.phone ? `Phone Number: ${testing_site.phone}` : ''}{testing_site.phone ? <br></br> : ''}
        You are {testing_site.appointment_required ? 'required' : 'not required'} to have an appointment to get tested.<br></br>
        This testing site {testing_site.antibody_testing ? 'provides' : 'does not provide'} antibody testing. <br></br>        
        Hours: <br></br>
        {testing_site.sunday ? `Sunday: ${testing_site.sunday}` : ''}{testing_site.sunday ? <br></br> : ''}
        {testing_site.monday ? `Monday: ${testing_site.monday}` : ''}{testing_site.monday ? <br></br> : ''}
        {testing_site.tuesday ? `Tuesday: ${testing_site.tuesday}` : ''}{testing_site.tuesday ? <br></br> : ''}
        {testing_site.wednesday ? `Wednesday: ${testing_site.wednesday}` : ''}{testing_site.wednesday ? <br></br> : ''}
        {testing_site.thursday ? `Thursday: ${testing_site.thursday}` : ''}{testing_site.thursday ? <br></br> : ''}
        {testing_site.friday ? `Friday: ${testing_site.friday}` : ''}{testing_site.friday ? <br></br> : ''}
        {testing_site.saturday ? `Saturday: ${testing_site.saturday}` : ''}{testing_site.saturday ? <br></br> : ''}
        {testing_site.additional_info ? `Additional Information: ${testing_site.additional_info}` : ''}{testing_site.additional_info ? <br></br> : ''}         
        {testing_site.provider_url ? `URL: ` : ''}{testing_site.provider_url ? <a href = {testing_site.provider_url}>{testing_site.provider_url}</a> : ''}{testing_site.provider_url ? <br></br> : ''} 
        <Link href="/covid-testing-sites/[site]" as={`/covid-testing-sites/${name}?name=${name}`}>
            <a>Link to this Info</a>
        </Link>
      </p>
      
    }
  </div>
}

export default Post