import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { BsPhone, BsPerson, BsPersonAdd } from 'react-icons/bs';
import s from './ContactForm.module.css';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format')
    .required('Required'),
});

const ContactForm = ({ contacts, onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      iziToast.warning({
        position: 'topRight',
        message: `${values.name} is already in contacts`,
      });
      resetForm();
      return;
    }

    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form autoComplete="off" className={s.contactFormWrap}>
        <label className={s.contactFormLabel} htmlFor="name">
          Name
        </label>
        <div className={s.contactFormInputWrap}>
          <Field
            className={s.contactFormInput}
            type="text"
            name="name"
            id="name"
          />
          <BsPerson className={s.contactFormIcon} size="20" />
        </div>
        <ErrorMessage
          name="name"
          component="span"
          className={s.contactFormError}
        />

        <label className={s.contactFormLabel} htmlFor="number">
          Number
        </label>
        <div className={s.contactFormInputWrap}>
          <Field
            className={s.contactFormInput}
            type="text"
            name="number"
            id="number"
          />
          <BsPhone className={s.contactFormIcon} size="20" />
        </div>
        <ErrorMessage
          name="number"
          component="span"
          className={s.contactFormError}
        />

        <button className={s.contactFormBtn} type="submit">
          <BsPersonAdd className={s.contactFormBtnIcon} size="15" />
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactForm;