import React from "react";
import Links from "./Links";

function About(props) {
  var bioShow;
  if(props.bio){
    bioShow = Bio(props.bio);
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioShow}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

function Bio(bio){
  return(<p>{bio}</p>)
}

export default About;
