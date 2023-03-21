import './App.css';
import Scene from './components/Scene';
import Strings from './components/Text';
import Divstyle from './styled-div';
import Buttonstyle from './styled-button';
import { useState } from 'react';

function App() {

  const [num, setNum] = useState(0);
  const anterior = () => {
    if (num === 0) {
      setNum(3)
    }
    else {
      setNum(num - 1);
    }
  };
  const posterior = () => {
    if (num === 3) {
      setNum(0)
    }
    else {
      setNum(num + 1);
    }
  };

  return (
    <Divstyle>
      <h1> {num} </h1>
      <Buttonstyle onClick={anterior}>Anterior</Buttonstyle>
      <Buttonstyle onClick={posterior}>Següent</Buttonstyle>
      <Scene phrase={Strings[0]} />
      <Scene phrase={Strings[1]} />
      <Scene phrase={Strings[2]} />
      <Scene phrase={Strings[3]} />
    </Divstyle>
  );
}

export default App;
