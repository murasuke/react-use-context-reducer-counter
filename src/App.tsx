import { VFC } from 'react';

import CounterWidget from 'components/CounterWidget';

import './styles.css';

const App: VFC = () => (
  <div className="App">
    <header>
      <h1>ビーズカウンター()useContext, useReducer併用</h1>
    </header>
    <CounterWidget initialCount={3} />
  </div>
);

export default App;
