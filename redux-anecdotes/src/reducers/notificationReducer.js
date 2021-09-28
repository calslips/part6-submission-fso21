const initialState = ''
let timeoutID

export const setNotice = (noticeContent, durationInSeconds) => {
  clearTimeout(timeoutID)
  return (dispatch) => {
    const msDuration = durationInSeconds * 1000
    dispatch({
      type: 'POST_NOTICE',
      notification: noticeContent
    })
    timeoutID = setTimeout(() => {
      dispatch(removeNotice())
    }, msDuration)
  }
}

const removeNotice = () => {
  return {
    type: 'REMOVE_NOTICE',
    notification: initialState
  }
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_NOTICE':
      return action.notification
    case 'REMOVE_NOTICE':
      return initialState
    default:
      return state
  }
}

export default notificationReducer