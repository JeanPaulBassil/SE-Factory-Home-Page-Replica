import Stats from "../Stats/Stats"
import './Hero.css'
import Programs from "../Programs/Programs"

export default function Hero(params) {
    return(
        <div className="hero">
            <Stats/>
            <Programs/>
        </div>
    )
};
