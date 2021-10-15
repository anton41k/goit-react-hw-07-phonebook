import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import css from "./Form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const fieldsForm = { name: setName, number: setNumber };

  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getLoading);

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    fieldsForm[name](value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    dispatch(contactsOperations.addContact(name, number));
    //onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form_label} htmlFor={nameInputId}>
        Name
        <input
          id={nameInputId}
          className={css.form_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          value={name}
        />
      </label>

      <label className={css.form_label} htmlFor={numberInputId}>
        Number
        <input
          id={numberInputId}
          className={css.form_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      {!isLoading && (
        <button className={css.form_submit} type="submit">
          Add contact
        </button>
      )}
    </form>
  );
}

export default Form;
