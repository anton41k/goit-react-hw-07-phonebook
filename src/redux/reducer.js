import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

import paramCreateReducer from "./paramCreateReducer";

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) =>
    paramCreateReducer.addContact(state, payload),
  [actions.deleteContact]: (state, { payload }) =>
    paramCreateReducer.deleteContact(state, payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
