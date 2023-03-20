import './App.css';
import Scene from './components/Scene';
import Strings from './components/Text';
import Pstyle from './styled-p';
import Divstyle from './styled-div';

function App() {
  return (
    <Divstyle>
      <Pstyle><Scene phrase={Strings[0]} /></Pstyle>
      <Pstyle><Scene phrase={Strings[1]} /></Pstyle>
      <Pstyle><Scene phrase={Strings[2]} /></Pstyle>
      <Pstyle><Scene phrase={Strings[3]} /></Pstyle>
    </Divstyle>
    
  );
}

export default App;
