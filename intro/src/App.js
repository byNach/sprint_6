import './App.css';
import Scene from './components/Scene';
import Strings from './components/Text';
import DivstyleStories from './styles/styled-stories-div';
import Buttonstyle from './styles/styled-button';
import Pstyle from './styles/styled-p';
import PstyleBg from './styles/styled-p-bg';
import { useState } from 'react';
import DivStyleWellcome from './styles/styled-wellcome-div';
import EntrarButton from './styles/styled-entrar-button';
import Description from './components/Description_on_WellcomePage';

function App() {

  const [renderApp, setRenderApp] = useState(false);
  const viewApp = () => {
    setRenderApp(true);
  };

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
    <div>
      {renderApp ? (
        <DivstyleStories>
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
        </DivstyleStories>
      ) : (
        <DivStyleWellcome> 
            <Description />
          
            <EntrarButton  onClick={viewApp}>ENTRAR</EntrarButton>
                 
        </DivStyleWellcome>
      )}
    </div>
  );
}

export default App;