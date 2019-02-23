import _ from 'lodash';
import fetchMock from 'fetch-mock'

import { STAGE } from '../../utils';
import data from './book.data';
import expectedDispatchActions from './duck.test.helper';

import reducer, { ActionCreators as BookActions, TYPES } from '../books.duck';
import expectedDispatchedActions from './duck.test.helper';

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
    type: TYPES.GET_BOOKS_SUCCESS,
    payload: {
      book: data,
    },
  }
  const getBookErrorAction = {
    type: TYPES.GET_BOOKS_ERROR,
    payload: {
      error: 'error',
    },
  }

  describe('Testing Async Actions for books duck', () => {
    test('dispatch getBook creates GET_BOOK and GET_BOOKS_SUCCESS', async () => {

      fetchMock.getOnce(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, 200);

      const action = BookActions.getBook(isbn);
      const dispatchedActions = [
        getBookAction,
        getBookSuccessAction,
      ];

      await expectedDispatchActions(action, dispatchedActions);
    });
  });
});
