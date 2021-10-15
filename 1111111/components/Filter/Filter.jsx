import { useSelector, useDispatch } from 'react-redux';

import { contactsActions, contactsSelectors } from '../../redux/contacts';
import css from "./Filter.module.css";

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  <label className={css.filter_label}>
    Find contacts by name
    <input
      className={css.filter_input}
      type="text"
      value={value}
      onChange={e => dispatch(contactsActions.filterContact(e.target.value))}
    />
  </label>
};

export default Filter;
