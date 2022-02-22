import React, {useState, useEffect } from "react";




const AnimalButton = (props) => {
    console.log(props)
    // const [audio] = useState(new Audio({url: props.url}))
   
    
    const [hover, setHover] = useState(false)
    
   
    // const start = () => {
    //     // if (animal.id === id)
    //     console.log("yep")
    //     // audio.play()
        
    //   }
    return(
        <div className="animal--grid">
            <button className="col-"
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

