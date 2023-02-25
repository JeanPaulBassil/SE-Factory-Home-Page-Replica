import "./Partners.css"

export default function Partners(params) {
    const strategicPartnersNames =[{
        name: "Beirut Digital District",
        icon: "https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1591389137172-CNMIQAFQDN3AXUKXW7Z1/image-asset.jpeg?format=750w"
    },{
        name: "LIU",
        icon: "https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1591389170314-B0B560X7KF4YFZIP9IKT/6.jpg?format=750w"
    },{
        name: "Berytech",
        icon: "https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1591389190527-RVS5D8BXYPDWZUA4MIUL/3.jpg?format=750w"
    },{
        name: "spark",
        icon: "https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1591389210499-FXDI56FU51G1ERTQI523/8.jpg?format=750w"
    },]

    const strategicPartners = strategicPartnersNames.map(name => <img alt={name.name} src={name.icon}/>)
    return (
        <div className="partners">
           <div className="funding-partners">
            <h3>Funding Partners</h3>
            <img className="fundingIcons" alt="funding Partners" src="https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/d71b7126-90f7-4d85-8132-ac274d491d8e/SEF+Logo+Visual.jpg?format=2500w"/>
           </div>
           <div className="Strategic Partners">
                <h3>Strategic Partners</h3>
                <div className="strategic-icons">
                    {strategicPartners}
                </div>
           </div> 
        </div>
    )
};
