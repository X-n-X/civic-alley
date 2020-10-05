import React from 'react';
import Link from 'next/link';
import { startCase } from 'lodash';

const whiteBackgroundStyle = {backgroundColor: "white",color: "black",padding: "12px",borderRadius: "25px",
border: "solid",borderWidth: "4px",borderColor: "black", width: "92%",
textAlign: "center"};

const blackBackgroundStyle = {backgroundColor: "black",color: "white",padding: "12px",borderRadius: "25px",
border: "solid",borderWidth: "4px",borderColor: "white", width: "92%",
textAlign: "center"};

const whiteBackgroundLeftAlignStyle = {backgroundColor: "white",color: "black",padding: "12px",borderRadius: "25px",
border: "solid",borderWidth: "4px",borderColor: "black", width: "92%",
textAlign: "left"};

const whiteBackgroundArray = {backgroundColor: "white",color: "black",padding: "0px",borderRadius: "25px",
border: "solid",borderWidth: "4px",borderColor: "black", width: "92%",
textAlign: "center"};

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

const Phone = ({phone,style}) => (
  <p style={style}>
    Phone Number: <a href={"tel:"+phone}>{phone}</a><br />
  </p>
);

const URL = ({url,style}) => (
  <p style={style}>
    URL: <a target= "_blank" href={url}>{url}</a><br />
  </p>
);


export function TestingSiteInfo({ site }) {
  const {
    name,
    address,
    phone,
    appointment_required,
    antibody_testing,
    hours,
    additional_info,
    provider_url,
  } = ((site || {}).site_info || {});
  return (
    <p >
      <TextDisplay beforeText={`Name: `} afterText = "" text={name} style={blackBackgroundStyle} />
      <TextDisplay beforeText ={`Address: `} afterText = "" text={address} style={whiteBackgroundStyle}/>
      <Phone phone={phone} style = {whiteBackgroundStyle}/>
      <TextDisplay beforeText ={`You are `} afterText = " to have an appointment to get tested." text={appointment_required ? 'required' : 'not required'} style={whiteBackgroundStyle}/>
      <TextDisplay beforeText ={`This testing site `} afterText = " antibody testing." text={antibody_testing ? 'provides' : 'does not provide'} style={whiteBackgroundStyle}/>
      <TextDisplayArray beforeText={["Sunday: ","Monday: ","Tuesday: ","Wednesday: ","Thursday: ","Friday: ","Saturday: "]}
        text={[hours.sunday,hours.monday,hours.tuesday,hours.wednesday,hours.thursday,hours.friday,hours.saturday]}
        afterText={["","","","","","",""]} style={whiteBackgroundArray}/>
      <TextDisplay beforeText ={`Additional Information: `} afterText = "" text={additional_info} style={whiteBackgroundStyle}/>      
      <URL url = {provider_url} style = {whiteBackgroundStyle} />
    </p>
  );
}
