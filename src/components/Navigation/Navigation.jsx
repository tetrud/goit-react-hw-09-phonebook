import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authSelectors } from '../../redux/auth';
import './Navigation.scss';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      {!isLoggedIn ? (
        <NavLink
          exact
          to="/"
          className="Navigation"
          activeClassName="Navigation__active"
        >
          Home
        </NavLink>
      ) : (
        <NavLink
          exact
          to="/contacts"
          className="Navigation"
          activeClassName="Navigation__active"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
