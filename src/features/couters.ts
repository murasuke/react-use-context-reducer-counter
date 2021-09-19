import { createContext } from 'react';
import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';

export type CounterState = { count: number };
export type CounterContextType = {
  state: CounterState;
  dispatch: React.Dispatch<AnyAction>;
};

export const CounterContext = createContext({} as CounterContextType);

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 }, // dummy value
  reducers: {
    added: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decremented: (state) => ({ ...state, count: state.count - 1 }),
    incremented: (state) => ({ ...state, count: state.count + 1 }),
  },
});
