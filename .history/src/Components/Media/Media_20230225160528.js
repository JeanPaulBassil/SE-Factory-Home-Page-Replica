export default function Media(params) {
    const medias = [{
        name: "forbes",
        link: "https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1588814318715-WVCEHMH9Y7N72E6U5BZ3/9.png?format=500w"
    },{
        name: "Tech Crunch",
        link: "https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1588814334939-I3Z4SHE2JF8SY6DSJ7L4/8.png?format=500w"
    },{
        name: "The Guardian",
        link: "https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1588814356768-T3IS2PUEGWSJA4CH7FOL/3.png?format=500w"
    },{
        name: "Tv 5 Monde",
        link: "https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1588814414909-JE93KHKF4LYH5FVTE2EP/1.png?format=500w"
    },{
        name: "L'orient Le jour",
        link: "https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1588814433113-K8T38T3XQ7ME8C2HUQVM/2.png?format=500w"
    },{
        name: "Entrepreneur",
        link: "https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1588814458140-M3H2R0QP0WZJGJZT0LXZ/7.png?format=500w"
    },{
        name: "Wamda",
        link: "https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1588814525813-71516OZGLMD6ONQ3B19E/5.png?format=500w"
    },{
        name: "Executive",
        link: "https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1588814552857-B02APBWZI4OJLEOU8NF4/4.png?format=500w"
    },]
    const mediaIcons = medias.map(icon => <img alt={icon.name} src={icon.link}/>)
    return (
        <div className="media">
            <h3>In The Media</h3>
            <div className="mediaIcons">
                {mediaIcons}
            </div>
        </div>
    )
};
