import  toast  from 'react-hot-toast';

import { useDeleteContactMutation } from "../../services/contactApi";
import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  if (isDeleting) {
    toast.success(`Contact ${name} is delete!!!`);
  }

  return (
    <li className={css.contact_item}>
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
