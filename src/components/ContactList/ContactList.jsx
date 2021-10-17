import { useSelector } from 'react-redux';

import { useGetContactsQuery } from "../../services/contactApi";
import { getFilterValue } from '../../redux/contacts/selectors.js';
import Contact from "../Contact/Contact";
import csss from "./ContactList.module.css";

const ContactList = () => {
  const filter = useSelector(getFilterValue);

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
      {contacts?.map((contact) => (
        
          <Contact key={contact.id} { ...contact }/>
        
      ))}
    </ul>
    )
}

export default ContactList;