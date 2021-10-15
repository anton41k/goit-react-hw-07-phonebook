import React from "react";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  console.log(contacts);
  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li
          key={id}
          className={`${false ? css.contact_item_send : css.contact_item_bgc} ${
            css.contact_item
          }`}
        >
          <Contact
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
