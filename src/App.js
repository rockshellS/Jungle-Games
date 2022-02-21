import React, {useState} from "react";
import Nav from "./Nav";
import AnimalButton from "./AnimalButton";
import Animals from "./animalData"


const App = () => {
  // const [animals, setAnimals] = useState(animals)
  
  
  
  const handleClick = () => {
    // if (animal.id === id)
    console.log("yep")
    // audio.play()
    
  }

  
  const animals = Animals.map((animal => (
    <AnimalButton  key={animal.id} id={animal.id} name={animal.name} url={animal.url} handleClick={handleClick}/>
    )))
    
  return (
    <div className="App">
     <Nav />
     {animals}
     
    </div>
  );


}

export default App;
