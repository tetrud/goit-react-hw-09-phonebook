import { useSelector } from 'react-redux';

import AuthNavigation from '../Navigation/AuthNavigation';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';
import './AppBar.scss';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className="Header">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
}
