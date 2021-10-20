import { useSelector } from 'react-redux';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

import { useGetContactsQuery } from "../../services/contactApi";
import { getFilterValue, getAddNameContact } from '../../redux/contacts/selectors.js';
import Contact from "../Contact/Contact";
import csss from "./ContactList.module.css";

let stringToColor = (str) => {
    const hash = 0;
    const color = '#';
    const i;
    const value;
    const strLength;

    if(!str) {
        return color + '333333';
    }

    strLength = str.length;

    for (i = 0; i < strLength; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    for (i = 0; i < 3; i++) {
        value = (hash >> (i * 8)) & 0xFF;
        color += ('00' + value.toString(16)).substr(-2);
    }

    return color;
};
let letter = '';
const firstUpperLetterContact = (name) => {
  let backgroundColor = stringToColor(name);
  console.log('backgroundColor ', backgroundColor)
  const firstLetter = name.substr(0, 1).toUpperCase();
  console.log('firstLetter ', firstLetter)
  if(letter !== firstLetter){
    letter = firstLetter;
    return {backgroundColor: backgroundColor, firstLetter: firstLetter}
  }
  return null
}

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
console.log('backgroundColor ', contacts)
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
        
        <Contact key={contact.id} {...contact} addNameContact={ addNameContact} optionFirstLetter={firstUpperLetterContact}/>
        
      ))}
    </ul>
    )
}

export default ContactList;
