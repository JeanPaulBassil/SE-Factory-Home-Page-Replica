import Stat from '../stat/stat'
import './Stats.css'

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
            <div className='stats-grid2'>
                <img alt="img" src="https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1589973257029-U5TMSGF2LP59RSP30RDP/Artboard+4%402x-100.jpg?format=1000w"/>
                <div className='text1'>
                    <h1>Get the skills</h1>
                    <h1><strong>companies look for.</strong></h1>
                    <p>Learn how to become a professional Full <br/> Stack Web Developer. Acquire technical and <br/> interpersonal
                    skills, and gain access to a vast <br/>network of employers</p>
                    <a href='./'>Learn More →</a>
                </div>
            </div>
        </div>
    )
};
