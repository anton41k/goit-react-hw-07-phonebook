import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contactsActions";
import * as contactsShelfAPI from "../../services/contactshelf-api";
import { v4 as uuidv4 } from "uuid";

export const fetchContacts = () => (dispatch) => {
  dispatch(getContactsRequest());

  contactsShelfAPI
    .fetchContacts()
    .then(({ data }) => {
      console.log(data);
      dispatch(getContactsSuccess(data));
    })
    .catch((error) => dispatch(getContactsError(error)));
};

export const addContact = (name, number) => (dispatch) => {
  const contact = {
    id: uuidv4(),
    name,
    number,
  };

  dispatch(addContactRequest());

  contactsShelfAPI
    .addContact(contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());

  contactsShelfAPI
    .deleteContact(id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};
