import React from "react";
import css from "./Contact.module.css";

const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <span className={css.contact_name}>{name}</span>
      <span className={css.contact_number}>{number}</span>

      <button className={css.del_btn} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </>
  );
};

export default Contact;
