import { useSelector } from 'react-redux';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

import { useGetContactsQuery } from "../../services/contactApi";
import { getFilterValue, getAddNameContact } from '../../redux/contacts/selectors.js';
import Contact from "../Contact/Contact";
import csss from "./ContactList.module.css";

const ContactList = () => {
  const filter = useSelector(getFilterValue);
  const addNameContact = useSelector(getAddNameContact);

  const filteredContacts = (filterValue, contacts) => {
    const normalizeFilter = filterValue.toLowerCase();
    return contacts
      ?.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(normalizeFilter) ||
          number.includes(normalizeFilter),
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const { contacts } = useGetContactsQuery(null, {
    refetchOnReconnect: true,
    selectFromResult: ({ data }) => ({
      contacts: filteredContacts(filter, data),
    }),
  });

  return (
    <ul className={csss.contact_list}>
      <BeatLoader
        loading={!contacts}
        css={css`margin: 0 auto;`}
        size={20}
        margin={10}
        color={"green"}
      />
      {contacts?.map((contact) => (
          
        <Contact key={contact.id} {...contact} addNameContact={ addNameContact}/>
        
      ))}
    </ul>
    )
}

export default ContactList;