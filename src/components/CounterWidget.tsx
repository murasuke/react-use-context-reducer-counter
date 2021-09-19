import React, { VFC, useReducer } from 'react';

import { CounterContext, CounterState, counterSlice } from 'features/couters';
import ColorfulBeads from './ColorfulBeads';
import CounterBoard from './CounterBoard';

export const CounterWidget: VFC<{ initialCount?: number }> = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(
    counterSlice.reducer,
    initialCount,
    (count: number): CounterState => ({ count }),
  );

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <CounterBoard />
      <ColorfulBeads />
    </CounterContext.Provider>
  );
};

export default CounterWidget;
