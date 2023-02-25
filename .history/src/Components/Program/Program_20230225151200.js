import "./Program.css"

export default function Program({info, title, description}) {
    return (
        <div className="program">
            <h3>{`> ${info}`}</h3>
            <h2>{title}
            <br/>
            _
            </h2>
            <p>{description}</p>
            <a href="./"><p><strong>Learn More</strong></p> →</a>
        </div>
    )
};
