const initialState = '';

export const filterWith = (text) => {
  return {
    type: 'SET_FILTER',
    filter: text
  }
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export default filterReducer
