import { BsPhone, BsPerson, BsTrash } from 'react-icons/bs';
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import s from './Contact.module.css';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={s.contactContainer}>
      <ul className={s.contactDetailsList}>
        <li className={s.contactName}>
          <BsPerson className={s.contactIcon} size="18" />
          {name}
        </li>
        <li className={s.contactNumber}>
          <BsPhone className={s.contactIcon} size="18" />
          {number}
        </li>
      </ul>
      <button className={s.contactDeleteBtn} type="button" onClick={handleDelete}>
        <BsTrash className={s.deleteBtnIcon} size="15" />
        Delete
      </button>
    </div>
  );
};

export default Contact;