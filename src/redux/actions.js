import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("types/add", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction("types/delete");

const changeFilter = createAction("types/changeFilter");

const resFilter = createAction("types/changeFilter");

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter, resFilter };
