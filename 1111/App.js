import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import css from "./App.module.css";
import * as contactShelfAPI from "./services/contactshelf-api";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? []; //render только один раз в начале
  });
  const [filter, setFilter] = useState("");

  //contactShelfAPI.fetchContacts().then()
  //console.log(contactShelfAPI.fetchContacts().then());

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const randomId = () => uuidv4();

  const formSubmitHandle = ({ name, number }) => {
    const contact = {
      id: randomId(),
      name,
      number,
    };

    setContacts((contacts) => {
      const found = contacts.find((contact) => contact.name === name);
      if (!found) {
        return [contact, ...contacts];
      }
      alert(`${name} is already in contacts`);
      return [...contacts];
    });
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = (ev) => {
    setFilter(ev.currentTarget.value);
  };

  const deleteContact = (contactId) => {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== contactId)
    );
  };

  const resFilter = () => {
    setFilter("");
  };

  return (
    <div>
      <h2 className={css.title_phonebook}>Phonebook</h2>
      <Form onSubmit={formSubmitHandle} resFilter={resFilter} />
      <h2 className={css.title_contacts}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
