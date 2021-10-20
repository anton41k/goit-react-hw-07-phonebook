import toast from 'react-hot-toast';

import { useDeleteContactMutation } from "../../services/contactApi";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, addNameContact, optionFirstLetter }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  if (isDeleting) {
    toast.success(`Contact ${name} is delete!!!`);
  }

  

  return (
    <li className={`${addNameContact === name ? `${css.contact_item_add}` : `${css.contact_item_h}`} ${css.contact_item}`}>
      {optionFirstLetter(name) && <span className={css.first_letter} >{optionFirstLetter.firstLetter}</span>}
      <span className={css.contact_name}>{name}</span>
      <span className={css.contact_number}>{number}</span>

      <button
        className={`${isDeleting ? css.del_btn_disabled : css.del_btn_active} ${css.del_btn}`}
        onClick={() => deleteContact(id)}
        disabled={isDeleting}>
                {isDeleting ? 'Deleting....' : 'Delete'}
      </button>
    </li>
  );
};

export default Contact;
