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

            </div>
        </div>
    )
};
