import React from "react";
import { connect } from "react-redux";

import contactsActions from "../../redux/actions";
import css from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <label className={css.filter_label}>
    Find contacts by name
    <input
      className={css.filter_input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (ev) =>
    dispatch(contactsActions.changeFilter(ev.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
