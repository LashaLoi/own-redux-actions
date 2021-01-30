import { createStore } from "redux";
import { createAction, handleActions } from "./redux-actions";

const increment = createAction("increment");
const decrement = createAction("decrement");
const reset = createAction("reset");

const initialState = {
  count: 0
};

export const reducer = handleActions(
  {
    [increment]: (state, payload) => ({
      ...state,
      count: state.count + payload
    }),
    [decrement]: (state, payload) => ({
      ...state,
      count: state.count - payload
    }),
    [reset]: () => initialState
  },
  initialState
);

const store = createStore(reducer);

console.log(store.getState());
store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(increment(1));
console.log(store.getState());
store.dispatch(decrement(2));
store.dispatch({
  type: "unknown"
});
console.log(store.getState());
