import { ContactForm } from './Phonebook/ContactForm';
import { ContactList } from './Phonebook/ContactList/ContactList';
import { Filter } from './Phonebook/Filter/Filter';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      return localContacts;
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteUser = userId => {
    setContacts(contacts.filter(({ id }) => id !== userId));
  };

  const addUser = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };

    if (contacts.filter(contact => contact.name === data.name).length) {
      alert(data.name + ' is already in contacts!');
    } else {
      setContacts([...contacts, newContact]);
    }
  };

  const setFilterValue = data => {
    setFilter(data);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} />
      <h2>Contacts</h2>
      <Filter setFilterValue={setFilterValue} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteUser={deleteUser}
      />
    </>
  );
};
