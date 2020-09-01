import React from 'react';
import useSwr from 'swr';

import { getLayout } from 'components/MapLayout';

//const fetcher = (...args) => fetch(...args).then(res => res.json())

function About() {
  return (
    <div className="sidebar-content">      
      
    </div>
  );
}

About.getLayout = getLayout;

export default About;