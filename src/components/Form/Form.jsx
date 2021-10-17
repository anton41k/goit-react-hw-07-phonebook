import { useGetContactsQuery,  useAddContactMutation } from "../../services/contactApi";
import  toast  from 'react-hot-toast';
import { v4 as uuidv4 } from "uuid";
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

import ClipLoader from "react-spinners/ClipLoader";
import 'react-toastify/dist/ReactToastify.css';
import css from "./Form.module.css";

function Form() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, {isLoading}] = useAddContactMutation();

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleSubmit = async ev => {
    ev.preventDefault();
    const { name, number } = ev.currentTarget.elements;
    console.log(name.value);

    const found = contacts.find((contact) => contact.name === name.value);
    if (found) {
      toast.error(`${name.value} is already in contacts`);
      ev.currentTarget.reset();
        return
      }

    try {
      addContact({name: name.value, number: number.value});
      toast.success(`Contact ${name.value} created!`);
      ev.currentTarget.reset();
    } catch (error) {
      toast.error(error);
    }
    
    
}

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form_label} htmlFor={nameInputId}>
        Name
        <div className={css.thumb_input}>
          <div className={css.form_icon}>
            <FaUser size={16} />
          </div>
          <input
            id={nameInputId}
            className={css.form_input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </div>
      </label>

      <label className={css.form_label} htmlFor={numberInputId}>
        Number
        <div className={css.thumb_input}>
          <div className={css.form_icon}>
            <FaPhoneAlt size={16} />
          </div>
          <input
            id={numberInputId}
            className={css.form_input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </div>
      </label>
      <button
        className={`${isLoading ? css.form_submit_disabled : css.form_submit_active} ${css.form_submit}`}
        type="submit"
        disabled={isLoading}>
          <ClipLoader loading={isLoading} size={12} color={'white'}/> {` Add contact`}
      </button>
    </form>
  );
}

export default Form;
