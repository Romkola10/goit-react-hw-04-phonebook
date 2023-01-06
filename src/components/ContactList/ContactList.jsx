import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className="list_container">
      <ul className="list">
        {contacts.map(contact => (
          <li className="item" key={contact.id}>
            <p className="contact_name">
              {contact.name}: <span>{contact.number}</span>
            </p>
            <button
              className="button"
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.protoType = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),

  onDeleteContact: PropTypes.func,
};

export default ContactList;
