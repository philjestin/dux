import _ from 'lodash';

import mkAction from  '../mkAction';

describe('src::utils::mkAction', () => {

  test('when passed type and payload it returns an object with type and payload', () => {
    const payload = {
      data: 'Hello Medium',
    };
    const type = 'GET_ACTION';
    const combined = {
      type,
      payload,
    };
    const action = mkAction(type, { payload });


    expect(_.isEqual(mkAction(type, payload), combined)).toEqual(true);
    expect(action.payload.payload.data).toEqual('Hello Medium');
    expect(action.type).toEqual('GET_ACTION');
  });
});
