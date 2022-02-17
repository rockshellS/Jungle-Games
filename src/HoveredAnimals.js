import React, {useState, useEffect } from "react";
import Elephant from "./audio/Elephant.mp3"
import Lion from "./audio/Lion.mp3"

const HoverAnimals = () => {
    const [hover, setHover] = useState(false)
    const [audio] = useState(new Audio(Elephant))
    


    const start = (click, e) => {
        audio.play()
    }
    return(
        <div className="animal--grid">
            <button className="col-1">elephant</button>
            <button className="col-2">giraffe</button>
            <button className="col-3">flamingos</button>
            <button className="col-4" >gorilla</button>
            <button className="col-5" 
                onClick={start}
                onMouseEnter={() => setHover(start)}
                onMouseLeave={() => setHover(false)}>
            </button>
            <button className="col-6">lion</button>
            <button className="col-7">giraffe</button>
            <button className="col-8">lion</button>
            <button className="col-9">snake</button>
            <button className="col-10">alligator</button>
            <button className="col-11">toucan</button>
            <button className="col-12">what</button>

        </div>
    )
}

export default HoverAnimals