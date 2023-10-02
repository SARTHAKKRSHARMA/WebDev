import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("love");
  //variation 1
  // useEffect( () => 
  // {
  //   console.log("UI Rendering Done");
  // })


  //variation 2
  // useEffect(() => {
  //   console.log("UI Rendering")
  // }, [])

  //variation 3
  // useEffect(() => {
  //   console.log("Change observed");
  // }, [name]);


  //variation 4
  useEffect(() => 
  {

    console.log("Listener Added");
    console.log("Listener Added 1");
    return () => {
      console.log("Listener Removed")
    }
  }, [text])

  function changeHandler(e)
  {
    setText(e.target.value);
    console.log(text);
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
