import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authSelectors, authOperations } from '../../redux/auth';
import Button from '../Button';
import './UserMenu.scss';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const onLogOut = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);

  return (
    <div className="User">
      <p className="User__description">Welcome, {name}</p>
      <Button
        className="User__button"
        type="button"
        text="Logout"
        onClick={onLogOut}
      />
    </div>
  );
}
