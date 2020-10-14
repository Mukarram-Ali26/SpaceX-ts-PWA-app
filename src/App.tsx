import React, { useCallback, useState } from 'react';
import './App.css';
import logo from './logo.jpg';
import {MissionContainer} from './components/Mission/index';
import InfoContainer from './components/MissionInfo/index';

const App = () => {

  const [id, setId] = useState(0);
  const handleIdChange = useCallback(newId => {
    setId(newId);
  }, []);
  return (
    <div>
    <img src={logo} alt="SPACE X LOGO" style={{width:"40%", display:'block', margin:'auto'}}/>
    <div className="App">
      <MissionContainer handleIdChange={handleIdChange} />
     <InfoContainer id={id}/>
    </div>
    </div>
  );
}

export default App;
