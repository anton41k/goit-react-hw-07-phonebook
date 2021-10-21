import { useSelector, useDispatch } from 'react-redux';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";
import { AiOutlineTeam } from 'react-icons/ai';

import { useGetContactsQuery } from "../../services/contactApi";
import { getFilterValue, getAddNameContact, getFirstLetteName } from '../../redux/contacts/selectors.js';
import { actions } from '../../redux/contacts';
import Contact from "../Contact/Contact";
import csss from "./ContactList.module.css";

let stringToColor = (str) => {
  let red = 0;
  let green = 0;
  let blue = 0;
  let color = 'rgba';

    if(!str) {
        return color + '(69, 103, 137, 0.2)';
    }

    red = Math.floor(Math.random() * 250 + 0 );
    green = Math.floor(Math.random() * 250 + 0);
    blue = Math.floor(Math.random() * 250 + 0);

  color = `${color}(${red},${green},${blue},0.2)`
    return color;
};
let letter = '';
const optionFirstLetter = (name) => {
  let backgroundColor = stringToColor(name);
  const firstLetter = name.substr(0, 1).toUpperCase();
  if(letter !== firstLetter){
    letter = firstLetter;
    return {backgroundColor: backgroundColor, firstLetter: firstLetter}
  }
  return null
}

const ContactList = () => {
  const filter = useSelector(getFilterValue);
  const addNameContact = useSelector(getAddNameContact);
  const firstLetteName = useSelector(getFirstLetteName);
  const dispatch = useDispatch();
letter = '';
  const filteredContacts = (filterValue, filterToFirstLetteName, contacts) => {
    let normalizeFilter = null;
    console.log('filter ',filter, 'firstLetteName ', firstLetteName);
    if (firstLetteName) {
      normalizeFilter = filterToFirstLetteName.toLowerCase();
      return contacts?.filter(({ name }) => name.substr(0, 1).toLowerCase().includes(normalizeFilter))
    }
    else {
      
      normalizeFilter = filterValue.toLowerCase();
      return contacts?.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(normalizeFilter) ||
          number.includes(normalizeFilter),
      )
      .sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  const { contacts } = useGetContactsQuery(null, {
    refetchOnReconnect: true,
    selectFromResult: ({ data }) => ({
      contacts: filteredContacts(filter, firstLetteName, data),
    }),
  });
  let isResetFilters = filter.length > 0 || firstLetteName;

  const resetFilteres = () => {
    dispatch(actions.getFilterValue(''));
    dispatch(actions.getFirstLetteName(null))
  }
console.log(contacts);
  return (
    <>
      {isResetFilters &&
        <div className={csss.tumb_all_contacts}>
          <div title='All contacts' className={csss.all_contacts}>
            <AiOutlineTeam size={18} onClick={resetFilteres} />
          </div>
        </div>}
      <ul className={csss.contact_list}>
        <BeatLoader
          loading={!contacts}
          css={css`margin: 0 auto;`}
          size={20}
          margin={10}
          color={"green"}
        />
        {contacts?.map((contact) => (
          
          <Contact
            key={contact.id}
            {...contact}
            addNameContact={addNameContact}
            optionFirstLetter={optionFirstLetter}
          />
            
      ))}
      </ul>
    </>
    )
}

export default ContactList;
