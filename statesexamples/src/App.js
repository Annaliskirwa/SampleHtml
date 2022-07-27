import logo from './logo.svg';
import './App.css';

import StateExample from './components/usestate';
import StateTutorial from './components/usestate1';
import ReducerExample from './components/usereducer';
import EffectExample from './components/useeffect';

function App() {
  return (
    <div className="App">
      <h1>Examples</h1>
      {/* <StateExample/> */}
      {/* <StateTutorial/> */}
      {/* <ReducerExample/> */}
      <EffectExample/>
    </div>
  );
}

export default App;
