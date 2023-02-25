import Stat from '../stat/stat'
import './Stats.css'
import PhotoDesc from '../PhotoDesk/PhotoDesc'
export default function Stats(params) {
    const data = [{
        number: '90%',
        text: 'Employment Success Rate'
    },
    {
        number: '500+',
        text: 'Youth Trained Since 2016'
    },
    {
        number: '145+',
        text: 'Global Recruitment Partner Companies'
    }]
    const stats = data.map(part => {
        return (
            <Stat number={part.number} text={part.text}/>
        )
    })
    return(
        <div className="stats">
            <div className='stats-grid1'>
                {stats}
            </div>
            <PhotoDesc 
                image="https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1589973257029-U5TMSGF2LP59RSP30RDP/Artboard+4%402x-100.jpg?format=1000w"
                top="Get the skills"
                strong="companies look for."
                firstLine="Learn how to become a professional Full"
                secondLine="Stack Web Developer. Acquire technical and"
                thirdLine="interpersonal skills, and gain access to a vast"
                fourthLine="network of employers."
            />
            
        </div>
    )
};
