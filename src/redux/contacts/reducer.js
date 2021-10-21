import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { actions } from "./";

const filter = createReducer("", {
  [actions.getFilterValue]: (_, { payload }) => payload,
});

const addNameContact = createReducer(null, {
  [actions.getAddNameContact]: (_, { payload }) => payload,
});

const firstLetteName = createReducer(null, {
  [actions.getFirstLetteName]: (_, { payload }) => payload,
});

export default combineReducers({ filter, addNameContact, firstLetteName });
