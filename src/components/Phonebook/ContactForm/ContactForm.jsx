import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createPhoneBookThunk } from 'store/phonebook/thunkPhonebook';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const { contactList } = useSelector(state => state.phoneBook);

  const dispatch = useDispatch();

  const addContact = value => {
    const { name: nameProps, number: numberProps } = value;
    const includsName = contactList.find(
      ({ name, number }) =>
        name.toLowerCase() === nameProps.toLowerCase() || number === numberProps
    );
    if (includsName) {
      toast.warn(`Name ${nameProps}, phone ${numberProps} is already in contacts`);
      return;
    }
    dispatch(createPhoneBookThunk(value));
  };

  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

  const schema = yup.object().shape({
    name: yup.string().min(2).required(),
    phone: yup.number().min(6).required(),
  });

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <p>Enter your Name</p>
          </label>
          <Field type="text" name="name" className="form-control" placeholder="Enter name"/>
          <ErrorMessage name="name" component="div" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            <p>Enter your Phone</p>
          </label>
          <Field type="tel" name="phone" className="form-control" placeholder="Enter number"/>
          <ErrorMessage name="phone" component="div" />
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
        <button type="submit" className="btn btn-primary">
          Add contacts
        </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
