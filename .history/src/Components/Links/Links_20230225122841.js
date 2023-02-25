import React from "react";

export default function Links({type}) {
  const names = ["Home", "Get Trained", "Hire Talent", "FAQs", "Blog", "About Us", "Contact", "Apply Now"];
  const links = names.map(name => {
    return (
        <li>
            <a href="./">{name}</a>
        </li>
    )
  })
  
  return (
    <div>
        <ul>
            {links}
        </ul>
    </div>
  )
}