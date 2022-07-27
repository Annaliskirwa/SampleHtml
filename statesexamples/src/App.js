import logo from './logo.svg';
import './App.css';

import StateExample from './components/usestate';
import StateTutorial from './components/usestate1';
import ReducerExample from './components/usereducer';

function App() {
  return (
    <div className="App">
      <h1>Examples</h1>
      {/* <StateExample/> */}
      {/* <StateTutorial/> */}
      <ReducerExample/>
    </div>
  );
}

export default App;
