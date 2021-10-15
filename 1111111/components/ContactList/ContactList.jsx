import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList() {
  
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const contacts = useSelector(contactsSelectors.getContacts);
  const error = useSelector(contactsSelectors.getError);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <ul className={css.contact_list}>
      {contacts.length > 0 && !error && (
        visibleContacts.map(({ id, name, number }) => (
          <li
            key={id}
            className={`${false ? css.contact_item_send : css.contact_item_bgc} ${
              css.contact_item
            }`}
          >
            <Contact
              name={name}
              number={number}
              onDeleteContact={() => dispatch(contactsOperations.deleteContact(id))}
            />
          </li>
      )))}
    </ul>
  );
};

export default ContactList;
