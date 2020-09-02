import React, { useContext, useEffect } from 'react';

import { getLayout } from 'components/MapLayout';
import { MapContext, MAP_ACTIONS } from 'components/MapContext';

function Index() {
  const { dispatch } = useContext(MapContext);

  useEffect(() => {
    dispatch({ type: MAP_ACTIONS.CLEAR_MARKERS });
  }, []);

  return (
    <div className="sidebar-content">
      Civic Alley is a tool for citizens looking for more agency in their location. With this map based platform 
      we hope to reinvent what it means to be a part of a community. Our goal is to provide more access to public 
      knowledge for people throughout the United States.<br></br><br></br>
      WIDESPREAD ACCESSIBLE CIVIC INFO<br></br>
      (Find Your Local Representatives and Budget)<br></br><br></br>
      Our geographical platform details critical information regarding your local area. Previously hard to find 
      and scattered over various government websites, we have made this vital civic data more accessible. Civic 
      Alley puts everything you need to know about your local government in one place.<br></br><br></br>
      BUILDING SUSTAINABLE COMMUNITIES<br></br>
      (Local Community Organizations and Events)<br></br><br></br>
      Unsure of how to address a problem in your area? Looking for like minded neighbors? Or, are you simply 
      looking for a bite to eat in your locale? From your local community organizations to neighborhood 
      businesses, Civic Alley expands how you can get to know and meaningfully support your surroundings.<br></br><br></br>
      CONNECTING KNOWLEDGE<br></br><br></br>
      Everyday we are learning more about the importance of community. Everyone deserves the right to know 
      about the public resources available to them. Townie has the ability to help bring neighbors and 
      communities closer together.<br></br><br></br>
      Civic Alley is a project of the BY {`&`} BY Design Collaborative. 
      For more information, click <a href = {`https://drive.google.com/file/d/1JBGdB1d8zzTdpR4-NcpJR9_nnTnSiVTb/view?usp=sharing`}>here.</a>
      <br></br><br></br>
      Email: <a href = {`mailto:xandxandxandx@gmail.com`}>xandxandxandx@gmail.com</a>
    </div>
  );
}

Index.getLayout = getLayout;

export default Index;
