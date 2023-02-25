export default function Links({type}) {
    const mainNames = ["Home", "Get Trained", "Hire Talent", "FAQs", "Blog", "About Us", "Contact", "Apply Now"];
    const mainLinks = mainNames.map(name => {
        if (name === 'Apply Now'){
        <li>
            <ul>
                <Links type= "Apply"/>
            </ul>
        </li>
        }else {
            <li>
                <a href={`#${name}`}>
                    {name}
                </a>
            </li>
        }
    })

    if (type === 'Apply')
    {
            return (
            <nav>
                
            </nav>
        )
    } else {
        return (
            <nav>
               <ul>
               {mainLinks}
               </ul> 
            </nav>
        )
    }
};
