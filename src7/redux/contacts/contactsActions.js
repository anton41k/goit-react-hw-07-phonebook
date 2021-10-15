import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSucces = createAction("contacts/fetchContactsSucces");
export const fetchContactsError = createAction("contacts/fetchContactsError");
