import React from 'react';
import Link from 'next/link';
import { startCase } from 'lodash';

export function InfoLink({ site }) {
    const {
      name,
      address,
    } = ((site || {}).site_info || {});
    return (
      <p style={{backgroundColor: "white",color: "black",padding: "15px",borderRadius: "25px"}}>
        {name ? `Name: ${name}` : ''}{name ? <br /> : ''}
        Address: {address} <br />      
        <Link
          href={site.pageLink.href}
          as={site.pageLink.as}
        >
            <a>More Information Here</a>
        </Link>        
      </p>      
    );
  }
  