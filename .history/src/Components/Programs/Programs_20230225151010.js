import Program from "../Program/Program"
import "./Programs.css"

export default function Programs(params) {
    const data = [{
        info: "Our Signature Program",
        title: "Full Stack Web Development",
        description: "A 14-week (full-time) bootcamp that prepares you to become a professional software engineer by developing your technical and interpersonal skills."
    },
    {
        info: "Learn The basics",
        title: "Foundations of Computer Science",
        description: "A 6-week (part-time) blended learning program dedicated to the foundational concepts of Computer Science; includes online lectures & in-class sessions."
    }]
    
    const programs = data.map(program => {
        return (
            <Program info={program.info} title={program.title} description={program.description}/>
        )
    })
    return (
        <div className="programs">
            <h2>
                Discover the program
                <br/>
                <strong>
                    that's right for you.
                </strong>
            </h2>
            <div className="prog-previews">
                {programs}
            </div>
        </div>
    )
};
