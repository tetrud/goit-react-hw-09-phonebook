import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from '../../components/ContactForm';
import ContactsList from '../../components/ContactsList';
import ContactFilter from '../../components/ContactFilter';
import { contactsOperations } from '../../redux/contacts';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <section className="Section">
      <ContactForm />
      <ContactFilter />
      <ContactsList />
    </section>
  );
}
