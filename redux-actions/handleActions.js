export function handleActions(actions, defaultState) {
  const reducer = (state = defaultState, { type, payload }) => {
    if (actions[type]) {
      return actions[type](state, payload);
    }

    return state;
  };

  return reducer;
}
