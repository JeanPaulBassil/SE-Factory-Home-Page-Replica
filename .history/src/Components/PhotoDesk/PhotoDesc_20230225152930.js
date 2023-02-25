export default function PhotoDesc({image, top, strong, firstLine, secondLine, thirdLine, fourthLine}) {
    <div className='photo-desc'>
        <img alt="img" src={image}/>
        <div className='text1'>
            <h2>
            {top}
            <br/>
            <strong>{strong}</strong>
            </h2>
            <p>{firstLine} <br/>{secondLine} <br/>{thirdLine}<br/>{fourthLine}</p>
            <a href='.//Stats.js'>Learn More →</a>
        </div>
    </div>
};
