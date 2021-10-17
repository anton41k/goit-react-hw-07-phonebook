import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { actions } from "./";

const filter = createReducer("", {
  [actions.getFilterValue]: (_, { payload }) => payload,
});

export default combineReducers({ filter });
