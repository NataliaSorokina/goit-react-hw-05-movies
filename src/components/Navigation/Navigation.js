import { NavigLink } from 'components/Navigation/Navigation.styled';

const Navigation = () => (
  <nav>
    <NavigLink exact to="/">
      {' '}
      Home{' '}
    </NavigLink>
    <NavigLink exact to="/movies">
      {' '}
      Movies{' '}
    </NavigLink>
  </nav>
);

export default Navigation;
