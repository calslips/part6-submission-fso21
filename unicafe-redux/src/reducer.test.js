import deepFreeze from 'deep-freeze';
import counterReducer from './reducer';

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {};
    const action = {
      type: 'DO_NOTHING'
    };

    deepFreeze(state);
    const newState = counterReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({ ...state, good: 1 });
  });

  test('neutral is incremented', () => {
    const action = {
      type: 'OK'
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({ ...state, ok: 1 });
  });

  test('bad is incremented', () => {
    const action = {
      type: 'BAD'
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({ ...state, bad: 1 });
  });

  test('good, neutral, and bad are zeroed out', () => {
    const action = {
      type: 'ZERO'
    };
    const state = {
      good: 5,
      ok: 4,
      bad: 2
    };

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual(initialState);
  });
});
