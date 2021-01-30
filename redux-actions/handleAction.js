export function handleAction(actionCreator, cb, defaultState) {
  const reducer = (state = defaultState, { type, payload }) => {
    if (type === actionCreator.toString()) {
      return cb(state, payload);
    }

    return state;
  };

  return reducer;
}
