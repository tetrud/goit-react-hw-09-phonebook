import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Spinner from '../Loader';
import Button from '../Button';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import './ContactsList.scss';

export default function ContactsList() {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  const onDeleteContact = useCallback(
    id => dispatch(contactsOperations.deleteContact(id)),
    [dispatch],
  );

  return (
    <>
      {isLoadingContacts && <Spinner />}

      <ul className="ContactsList">
        {contacts.map(({ id, name, number }) => (
          <li className="ContactsList__item" key={uuidv4()}>
            <p className="ContactsList__text">
              <span className="ContactsList__name">{name}</span>: {number}
            </p>

            <Button
              className="ContactsList__button"
              text="Delete"
              type="button"
              onClick={() => onDeleteContact(id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
