import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';

import { getFilterValue, getAddNameContact } from '../../redux/contacts/selectors.js';
import { actions } from '../../redux/contacts';
import css from "./Filter.module.css";

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <label className={css.filter_label}>
      Find contacts by name
      <div className={css.thumb_input}>
        <div className={css.form_icon}>
          <AiOutlineSearch />
        </div>
        <input
          className={css.filter_input}
          type="text"
          value={filter}
          onChange={event => dispatch(actions.getFilterValue(event.target.value))}
        />
      </div>
  </label>
  )
};

export default Filter;
