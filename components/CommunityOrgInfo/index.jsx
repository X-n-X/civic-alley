import React from 'react';
import Link from 'next/link';

const whiteBackgroundStyle = {backgroundColor: "white",color: "black",padding: "12px",borderRadius: "25px",
border: "solid",borderWidth: "4px",borderColor: "black", width: "92%",
textAlign: "center"};

const blackBackgroundStyle = {backgroundColor: "black",color: "white",padding: "12px",borderRadius: "25px",
border: "solid",borderWidth: "4px",borderColor: "white", width: "92%",
textAlign: "center"};

const whiteBackgroundLeftAlignStyle = {backgroundColor: "white",color: "black",padding: "12px",borderRadius: "25px",
border: "solid",borderWidth: "4px",borderColor: "black", width: "92%",
textAlign: "left"};

const TextDisplay = ({beforeText,afterText,text,style}) => (
  <p style={style}>
    {text ? `${beforeText+text+afterText}`: ''}{text ? <br /> : ''}
  </p>
);

const TextDisplayArray = ({beforeText,afterText,text,style}) => (
  <div style={style}>
    {
      text.map((value, index) => <p key={index}> {text[index] ? `${beforeText[index]+text[index]+afterText[index]}`: ''}{text[index] ? <br /> : ''}</p>)
    }    
  </div>
);

const ContactInfo = ({contactInfo}) => (  
  <p style={{backgroundColor: "white",color: "black",padding: "12px",borderRadius: "25px",
                border: "solid",borderWidth: "4px",borderColor: "black", width: "92%",
                textAlign: "center"}}>    
    
    {contactInfo.includes("@") && `Contact Info: ${<a href={"mailto:"+contactInfo}>{contactInfo}</a>}`}{contactInfo && contactInfo !== "N/A" ? <br /> : ''}
    {!contactInfo.includes("@")&& contactInfo.includes(".") && contactInfo !== "N/A"? `Contact Info: ${<a target= "_blank" href={"mailto:"+contactInfo}>{contactInfo}</a>}`: ''}{contactInfo && contactInfo !== "N/A" ? <br /> : ''}
    {contactInfo.includes("-")&&!contactInfo.includes("@")&& !contactInfo.includes(".") && contactInfo !== "N/A"? `Contact Info: ${<a href={"tel:"+contactInfo}>{contactInfo}</a>}`: ''}{contactInfo && contactInfo !== "N/A" ? <br /> : ''}
    {/* Phone Number: <a href={"tel:"+phone}>{phone}</a><br /> */}
  </p>
);

const URL = ({url,style}) => (
  <p style={style}>
    URL: <a target= "_blank" href={url}>{url}</a><br />
  </p>
);


export function CommunityOrgInfo ({ orgSite }) {
  //const site_info  = orgSite.site_info;
  const {
    name,
    address,
    type,
    purpose,
    neighborhoodAssociatedWith,
    contactInfo,
    website    
  } = ((orgSite || {}).site_info || {});
  return (
    <p>      
      <TextDisplay beforeText={`Name: `} afterText = "" text={name} style ={blackBackgroundStyle} />
      <TextDisplay beforeText={`Address: `} afterText = "" text={address} style={whiteBackgroundStyle} />
      <TextDisplay beforeText={`Type: `} afterText = "" text={type} style={whiteBackgroundStyle}/>
      <TextDisplay beforeText={`Purpose: `} afterText = "" text={purpose} style={whiteBackgroundLeftAlignStyle}/>
      <TextDisplay beforeText={`Neighborhood(s): `} afterText = "" text={neighborhoodAssociatedWith} style={whiteBackgroundStyle}/>
      <TextDisplay beforeText={`Contact Info: `} afterText = "" text={contactInfo} style={whiteBackgroundStyle}/>
      <URL url = {website} style = {whiteBackgroundStyle} />
      </p>
  );
}
