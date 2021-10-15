import * as contactsActions from "./contactsActions";
import * as contactShelfAPI from "../../services/contactshelf-api";

export const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await contactShelfAPI.fetchContacts();
    dispatch(contactsActions.fetchContactsSucces(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};
