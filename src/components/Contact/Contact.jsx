import PropTypes from 'prop-types';
import { BsPhone, BsPerson, BsTrash } from 'react-icons/bs';
import s from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={s.contactContainer}>
      <ul className={s.contactDetailsList}>
        <li className={s.contactName}>
          <BsPerson className={s.contactIcon} size="18" />
          {contact.name}
        </li>
        <li className={s.contactNumber}>
          <BsPhone className={s.contactIcon} size="18" />
          {contact.number}
        </li>
      </ul>
      <button className={s.contactDeleteBtn} type="button" onClick={onDelete}>
        <BsTrash className={s.deleteBtnIcon} size="15" />
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;