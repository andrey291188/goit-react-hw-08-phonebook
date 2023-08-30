import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect, useMemo } from 'react';
import {
  deletePhoneBookThunk,
  getPhoneBookThunk,
} from 'store/phonebook/thunkPhonebook';
import { Loader } from 'components/Loader/Loader';

import 'react-toastify/dist/ReactToastify.css';

const phoneBookSelector = state => {
  return state.phoneBook;
};

const ContactLists = () => {
  const { contactList, isLoading, error } = useSelector(phoneBookSelector);

  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoneBookThunk());
  }, [dispatch]);

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contactList, filter]);

  const handleDeleteContact = contactId => {
    dispatch(deletePhoneBookThunk(contactId));
  };

  return (
    <>
      {isLoading && <Loader />}
      <ol className="list-group list-group-numbered bottom">
        {!isLoading &&
          error === '' &&
          getVisibleContacts.map(({ id, name, number }) => (
            <li
              key={id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Name: {name}</div>
                Phone number: {number}
              </div>
              <button onClick={() => handleDeleteContact(id)} className="btn btn-danger">Delete</button>
            </li>
          ))}
      </ol>
      {getVisibleContacts.length === 0 && isLoading && error === '' && (
        <p>I'm sorry, but there are not contacts</p>
      )}
      {error && !isLoading && <p>{error}</p>}
    </>
  );
};

export default ContactLists;

ContactLists.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
