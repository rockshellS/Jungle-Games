import React, {useState, useEffect } from "react";




const AnimalButton = (props) => {
    console.log(props)
    // const [audio] = useState(new Audio({url: props.url}))
   
    
    const [hover, setHover] = useState(false)
    
   
    
    return(
        <div className="animal--grid">
            <button className="col-"
                    id={props.id}
                    name={props.name}
                    url={props.url}
                    onClick={props.onClick}>
                
            </button>
        
     
        </div>
    )
}

export default AnimalButton


