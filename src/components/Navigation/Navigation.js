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
    {/* <NavLink exact to="/movies/:movieId" className="" activeClassName=""> */}
    {/* {' '}
      MovieDetailsPage{' '} */}
    {/* </NavLink> */}
    {/* <NavLink exact to="/movies/:movieId/cast" className="" activeClassName="">
      {' '}
      Cast{' '}
    </NavLink>
    <NavLink
      exact
      to="/movies/:movieId/reviews"
      className=""
      activeClassName=""
    >
      {' '}
      Reviews
    </NavLink> */}
  </nav>
);

export default Navigation;
