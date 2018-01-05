import { ActionTypes } from "../constants/Types"

const initialState = {
  contacts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CONTACTS: {
      return {contacts: action.contacts}
    }
    default: {
      return state
    }
  }
}
