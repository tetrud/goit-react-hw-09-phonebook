import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Title from '../Title';
import { contactsSelectors, contactsActions } from '../../redux/contacts';
import './ContactFilter.scss';

export default function ContactFilter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  const onChange = useCallback(
    event => dispatch(contactsActions.changeFilter(event.target.value)),
    [dispatch],
  );

  return (
    <div>
      <Title title="Contacts" className="Title" />

      <label className="Filter__label">
        Find contacts by name
        <input
          className="Filter__input"
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
