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

    expect(_.isEqual(mkAction(type, payload), combined)).equal(true);
    expect(action.payload.payload.data).equal('Hello Medium');
    expect(action.type).equal('GET_ACTION');
  });
});
