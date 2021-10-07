import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className="" activeClassName="">
      {' '}
      Home{' '}
    </NavLink>
    <NavLink exact to="/movies" className="" activeClassName="">
      {' '}
      Movies{' '}
    </NavLink>
  </nav>
);

export default Navigation;
