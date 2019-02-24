import fetch from 'cross-fetch';

import { fetchApi, freezeObject, mkAction, STAGE } from '../utils';

export const TYPES = freezeObject(
  'GET_BOOK',
  'GET_BOOK_SUCCESS',
  'GET_BOOK_ERROR',
);

const ACTIONS = Object.freeze({
  getBook: isbn => mkAction(TYPES.GET_BOOK, { isbn }),
  getBookSuccess: data => mkAction(TYPES.GET_BOOK_SUCCESS, { data }),
  getBookError: error => mkAction(TYPES.GET_BOOK_ERROR, { error }),
});

export const ActionCreators = Object.freeze({
  getBook: isbn => async dispatch => {
    // Dispatch action of fetching a book
    dispatch(ACTIONS.getBook(isbn));

    return fetchApi(`https:///www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
      .then(data => {
        // Dispatch success action
        dispatch(ACTIONS.getBookSuccess(data));
      })
      .catch(error => {
        // Dispatch error action
        dispatch(ACTIONS.getBookError(error));
      });
  },
});

const initialState = {
  BOOK_STAGE: STAGE.READY,
  book: {},
  isbn: '',
  error: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.GET_BOOK:
      return Object.assign({}, state, {
        BOOK_STAGE: STAGE.LOADING,
        isbn: payload.isbn,
      });
    case TYPES.GET_BOOK_SUCCESS:
      return Object.assign({}, state, {
        BOOK_STAGE: STAGE.DONE,
        book: payload.data,
      });
    case TYPES.GET_BOOK_ERROR:
      return Object.assign({}, state, {
        BOOK_STAGE: STAGE.ERROR,
        error: payload.error,
      });
    default:
      return state;
  }
};

export default reducer;
