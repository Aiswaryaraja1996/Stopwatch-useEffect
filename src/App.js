
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import {useState} from 'react';
function App() {
  const [hide,setHide] = useState(false);
  return (
    <div className="App">

    {!hide && <Stopwatch initial={20}></Stopwatch>}

    <button onClick={()=>setHide(!hide)}>{!hide ? "HIDE TIMER":"SHOW TIMER"}</button>
      
    </div>
  );
}

export default App;
