
import React from "react";

export default function Links({type}) {
  const mainNames = ["Home", "Get Trained", "Hire Talent", "FAQs", "Blog", "About Us", "Contact", "Apply Now"];
  const applyNames = ["Full Stack Web Development", "Foundations of Computer Science"];
    
  if (type === 'Apply') {
    const applyLinks = applyNames.map(name => {
        return(
            <li>
                <a href="./">{name}</a>
            </li>
        )
    })
    return (
      <nav>
        <ul>
          {applyLinks}
        </ul>
      </nav>
    )
  } else {
    const mainLinks = mainNames.map(name => {
      if (name === 'Apply Now'){
        return(
          <li key={name}>
            <ul>
              Apply Now
              <Links type="Apply"/>
            </ul>
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
      <nav>
        <ul>
          {mainLinks}
        </ul>
      </nav>
    )
  }
};
