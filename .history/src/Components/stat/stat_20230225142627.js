import "./stat.css"

export default function stat({number, text}) {
    return(
        <div className="stat">
            <h1>{number}</h1>
            <p><strong>{text}</strong></p>
            <p><strong>-</strong></p>
        </div>
    )
};
