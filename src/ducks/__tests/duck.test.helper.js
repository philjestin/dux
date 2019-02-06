import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

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

    expect(actualDispatchedAction).toEqual(expectedDispatchedAction);
  });
};

export default expectedDispatchedActions;
