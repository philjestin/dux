import freezeObject from '../freezeObject';

describe('src::utils::freezeObject', () => {

  test('turns items into Symbols', () => {
    const GET_ACTION = 'GET_ACTION';
    const GET_ACTION_SUCCESS = 'GET_ACTION_SUCCESS';
    const GET_ACTION_ERROR =  'GET_ACTION_ERROR';
    const items = freezeObject(GET_ACTION, GET_ACTION_SUCCESS, GET_ACTION_ERROR);
    const itemOne = Symbol(GET_ACTION);
    const itemTwo = Symbol(GET_ACTION_SUCCESS);
    const itemThree = Symbol(GET_ACTION_ERROR);

    // Symbols can't === each other. New symbols are created instead.
    expect(items.GET_ACTION.toString()).toEqual(itemOne.toString());
    expect(items.GET_ACTION_SUCCESS.toString()).toEqual(itemTwo.toString());
    expect(items.GET_ACTION_ERROR.toString()).toEqual(itemThree.toString());
    expect(items.GET_ACTION.toString()).not.toEqual(itemThree.toString());
  });
});
