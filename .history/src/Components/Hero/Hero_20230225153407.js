import Stats from "../Stats/Stats"
import './Hero.css'
import Programs from "../Programs/Programs"
import Extras from "../Extras/Extras"

export default function Hero(params) {
    return(
        <div className="hero">
            <Stats/>
            <Programs/>
            <Extras/>
        </div>
    )
};
