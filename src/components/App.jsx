import { useState, useEffect } from 'react';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';


export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('myContacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('myContacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact(name, number) {
    const normalizedFilter = name.toLowerCase();
    const checkByName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFilter
    );

    if (checkByName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: nanoid(10),
      name,
      number,
    };

    setContacts([contact, ...contacts]);
  }

  function deleteContact(contactId) {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  }

  function filterChange(event) {
    setFilter(event.currentTarget.value);
  }

  function getFiltredContacts() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <section>
      <div>
        <h1 className='title'>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </div>

      <div>
        <h2 className='title'>Contacts</h2>
        <Filter value={filter} onChange={filterChange} />
      </div>

      <ContactList
        contacts={getFiltredContacts()}
        onDeleteContact={deleteContact}
      />
    </section>
  );
}



