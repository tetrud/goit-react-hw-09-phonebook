import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Title from '../../components/Title';
import Button from '../../components/Button/Button';
import { authOperations } from '../../redux/auth';
import '../Form.scss';

export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = event => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = event => {
    setPassword(event.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <section className="Section">
      <Title title="Login" className="Title" />

      <form onSubmit={handleSubmit} autoComplete="off" className="Form">
        <label className="Form__label">
          <input
            className="Form__input"
            type="email"
            name="email"
            value={email}
            placeholder=" "
            required
            onChange={handleChangeEmail}
          />
          <span className="Form__span">Email</span>
        </label>

        <label className="Form__label">
          <input
            className="Form__input"
            type="password"
            name="password"
            value={password}
            placeholder=" "
            required
            onChange={handleChangePassword}
          />
          <span className="Form__span">Password</span>
        </label>

        <Button className="Form__button" type="submit" text="Enter" />
      </form>
    </section>
  );
}
