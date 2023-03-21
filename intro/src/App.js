import './App.css';
import Scene from './components/Scene';
import Strings from './components/Text';
import Divstyle from './styled-div';
import Buttonstyle from './styled-button';
import Pstyle from './styled-p';
import PstyleBg from './styled-p-bg';

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
      <Buttonstyle onClick={anterior}>Anterior</Buttonstyle>
      <Buttonstyle onClick={posterior}>Següent</Buttonstyle>
        {Strings.map((e, index) => {
          if (index === num) {
            return <PstyleBg><Scene phrase={Strings[index]} /></PstyleBg>
          }
          else {
            return <Pstyle><Scene phrase={Strings[index]} /></Pstyle>
          }
        })}
    </Divstyle>
  );
}

export default App;