import _ from 'lodash';
import fetchMock from 'fetch-mock'

import { STAGE, fetchApi } from '../../utils';
import data from './book.data';

import reducer, { ActionCreators as BookActions, TYPES } from '../books.duck';
import expectedDispatchedActions from './duck.test.helper';

jest.mock('../../utils/fetchAPI');

describe('src::ducks::book.duck', () => {

  afterEach(() => {
    fetchMock.restore();
  });

  const isbn = '0747532699'; // Harry Potter and The Sorcerer's stone

  const getBookAction = {
    type: TYPES.GET_BOOK,
    payload: {
      isbn: isbn,
    },
  };
  const getBookSuccessAction = {
    type: TYPES.GET_BOOK_SUCCESS,
    payload: {
      data: data,
    },
  }
  const getBookErrorAction = {
    type: TYPES.GET_BOOK_ERROR,
    payload: {
      error: 'error',
    },
  }

  describe('Testing Async Actions for books duck', () => {
    test('dispatch getBook creates GET_BOOK and GET_BOOKS_SUCCESS', async () => {
      fetchApi.mockImplementation(() => Promise.resolve(data));
      const action = BookActions.getBook(isbn);
      const dispatchedActions = [
        getBookAction,
        getBookSuccessAction,
      ];

      await expectedDispatchedActions(action, dispatchedActions);
      jestExpect(fetchApi).toHaveBeenCalledWith(`https:///www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    });
  });
});
