import React from "react";

export default function Links({type}) {
  const names = ["Home", "Get Trained", "Hire Talent", "FAQs", "Blog", "About Us", "Contact", "Apply Now"];
  const links = names.map(name => {
    return (
        <li>
            <a href="./">{Name}</a>
        </li>
    )
  })
  
  return (
    <div>

    </div>
  )
}