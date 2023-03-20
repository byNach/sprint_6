import './App.css';
import Scene from './components/Scene';
import Strings from './components/Text';

function App() {
  return (
    <p>
      <Scene phrase = {Strings[0]} />
      <Scene phrase = {Strings[1]} />
      <Scene phrase = {Strings[2]} />
      <Scene phrase = {Strings[3]} />
    </p>

    );
}

export default App;
