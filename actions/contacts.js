import { ActionTypes } from "../constants/Types"
import { fetchContactsAPI } from '../api/contactsAPI'

function updateContacts(contacts) {
  return {
    type: ActionTypes.FETCH_CONTACTS,
    contacts
  }
}

export function fetchContacts() {
  return async dispatch =>  dispatch(updateContacts(await fetchContactsAPI()))
}
