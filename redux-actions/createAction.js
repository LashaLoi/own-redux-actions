export function createAction(actionType) {
  const actionCreator = payload => ({
    type: actionType,
    payload
  });

  actionCreator.toString = () => actionType.toString();

  return actionCreator;
}
