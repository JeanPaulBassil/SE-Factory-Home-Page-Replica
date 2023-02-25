
import React from "react";
import './Links.css'

export default function Links({type}) {
  const mainNames = ["Home", "Get Trained", "Hire Talent", "FAQs", "Blog", "About Us", "Contact", "Apply Now"];
  const applyNames = ["Full Stack Web Development", "Foundations of Computer Science"];
    
  if (type === 'Apply') {
    const applyLinks = applyNames.map(name => {
        return(
                <a href="./">{name}</a>
        )
    })
    return (
        <ul className="apply">
          {applyLinks}
        </ul>
    )
  } else {
    const mainLinks = mainNames.map(name => {
      if (name === 'Apply Now'){
        return(
          <li key={name}>
              Apply Now
              <Links type="Apply"/>

          </li>
        )
      } else {
        return (
          <li key={name}>
            <a href={`#${name}`}>
              {name}
            </a>
          </li>
        )
      }
    });

    return (
      <nav className="nav">
        <ul>
          {mainLinks}
        </ul>
      </nav>
    )
  }
};
