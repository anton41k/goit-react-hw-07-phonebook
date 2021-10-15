import { createAction } from "@reduxjs/toolkit";

export const getContactsRequest = createAction("Contact/getContactsRequest");
export const getContactsSuccess = createAction("Contact/getContactsSuccess");
export const getContactsError = createAction("Contact/getContactsError");

export const addContactRequest = createAction("Contact/addContactRequest");
export const addContactSuccess = createAction("Contact/addContactSuccess");
export const addContactError = createAction("Contact/addContactError");

export const deleteContactRequest = createAction(
  "Contact/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "Contact/deleteContactSuccess"
);
export const deleteContactError = createAction("Contact/deleteContactError");

export const filterContact = createAction("Contact/ChangeFilter");
