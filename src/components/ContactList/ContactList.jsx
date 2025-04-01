import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectVisibleContacts,
  selectContacts,
} from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchContacts());
    }
  }, [contacts.length, dispatch]); 

  if (!filteredContacts.length) {
    return <p className={css.message}>No contacts found.</p>;
  }

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
