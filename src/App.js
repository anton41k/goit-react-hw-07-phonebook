import Form from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import css from "./App.module.css";

//import formSubmitHandle from './redux/actions';

export default function App() {
  return (
    <div>
      <h2 className={css.title_phonebook}>Phonebook</h2>
      <Form />
      <h2 className={css.title_contacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
