import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const findAction = (store, type) => (
  store.getActions().find(action => (
    action.type === type
  ))
);

const expectedDispatchedActions = async (action, expectedDispatchedActions) => {
  const store = mockStore();

  await store.dispatch(action);

  expectedDispatchedActions.forEach(expectedDispatchedAction => {
    const actualDispatchedAction = findAction(store, expectedDispatchedAction.type);
    jestExpect(actualDispatchedAction).toEqual(expectedDispatchedAction);
  });
};

export default expectedDispatchedActions;
