import { VFC } from 'react';
import styled from 'styled-components';

import CounterWidget from 'components/CounterWidget';

const CenterdDiv = styled.div`
  text-align: center;
`;

const App: VFC = () => (
  <CenterdDiv className="App">
    <header>
      <h1>ビーズカウンターuseContext, useReducer併用</h1>
      コンポーネント毎にstateを保持する
    </header>
    <CounterWidget />
    <CounterWidget initialCount={3} />
  </CenterdDiv>
);

export default App;
