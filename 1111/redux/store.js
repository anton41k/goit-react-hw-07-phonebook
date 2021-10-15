import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../../src/redux/contacts/contactsReducer";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
