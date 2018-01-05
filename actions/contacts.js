import { ActionTypes } from "../constants/Types"

export function fetchContacts() {
  return {
    type: ActionTypes.FETCH_CONTACTS,
    contacts: []
  }
}
