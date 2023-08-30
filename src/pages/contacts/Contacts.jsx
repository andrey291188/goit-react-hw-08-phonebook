import ContactForm from 'components/Phonebook/ContactForm/ContactForm';
import ContactLists from 'components/Phonebook/ContactList/ContactList';
import FilterList from 'components/Phonebook/FilterList/FilterList';

const Contacts = () => {
  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm />
      <FilterList />
      <h2>Contacts</h2>
      <ContactLists />
    </div>
  );
};

export default Contacts;
