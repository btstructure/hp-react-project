import React, {useState, useEffect} from "react"
import Home from "./Home"
import NavBar from "./NavBar"

function App() {
  const[characters, setCharacters] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/characters")
    .then(response => response.json())
    .then(data => console.log(data))
    
  }, [])

  return (
    <div className="App">
      <Home />
      <NavBar />
      
    </div>
  );
}

export default App;
