import React, {useState, useEffect } from "react";




const AnimalButton = (props) => {
    const [hover, setHover] = useState(false)
    
    return(
        <div className="animal--grid">
            <button className={props.name}
                    type="button"
                    id={props.id}
                    name={props.name}
                    onClick={() => props.handleClick(props.sound)}>
                    {props.name}
            </button>
        
     
        </div>
    )
}

export default AnimalButton

// {props.name}

