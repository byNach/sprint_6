import './App.css';
import Scene from './components/Scene';
import Strings from './components/Text';
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
      setNum(Strings.length -1)
    }
    else {
      setNum(num - 1);
    }
  };
  const posterior = () => {
    if (num === Strings.length -1) {
      setNum(0)
    }
    else {
      setNum(num + 1);
    }
  };

  return (
    <>
      {renderApp ? (
        <>
          <Buttonstyle onClick={anterior}>Anterior</Buttonstyle>
          <Buttonstyle onClick={posterior}>Següent</Buttonstyle>
          {Strings.map((e, index) => {
            if (index === num) {
              return <PstyleBg key={index}><Scene phrase={Strings[index].text} /></PstyleBg>
            }
            else {
              return <Pstyle key={index}><Scene phrase={Strings[index].text} /></Pstyle>
            }
          })}
        </>
      ) : (
        <DivStyleWellcome>
          <Description />
          <EntrarButton onClick={viewApp}>ENTRAR</EntrarButton>
        </DivStyleWellcome>
      )}
    </>
  );
}

export default App;