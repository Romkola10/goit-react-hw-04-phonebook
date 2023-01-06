import { useState } from 'react';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();

    onSubmit(name, number);
    reset();
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <div className="form_container">
      <form className="contact_form" onSubmit={onFormSubmit}>
        <lable className="label">
          <span>Name</span>
          <input
            className='input_name'
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </lable>
        <label className="label">
          <span>Number</span>
          <input
            className='input_number'
            value={number}
            onChange={event => setNumber(event.target.value)}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
