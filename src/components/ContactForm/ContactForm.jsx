import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Title from '../Title';
import Button from '../Button';
import { contactsOperations } from '../../redux/contacts';
import './ContactForm.scss';

export default function Form() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      event.target.reset();

      dispatch(contactsOperations.addContact(name, number));
      setName('');
      setNumber('');
    },
    [name, number, dispatch],
  );

  return (
    <>
      <Title title="Phonebook" className="Title" />

      <div className="Phonebook">
        <form className="ContactForm" onSubmit={handleSubmit}>
          <div className="ContactForm__wrap">
            <label className="ContactForm__label">
              <input
                className="ContactForm__input"
                onChange={handleChangeName}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                placeholder=" "
              />
              <span className="ContactForm__span">Name</span>
            </label>

            <label className="ContactForm__label">
              <input
                className="ContactForm__input"
                onChange={handleChangeNumber}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                placeholder=" "
              />
              <span className="ContactForm__span">Number</span>
            </label>
          </div>

          <Button
            className="ContactForm__button"
            text="Add contact"
            type="submit"
          />
        </form>
      </div>
    </>
  );
}
//const mapDispatchToProps = dispatch => ({
//  onSubmit: (name, number) =>
//    dispatch(contactsOperations.addContact(name, number)),
//});

//export default connect(null, mapDispatchToProps)(Form);
