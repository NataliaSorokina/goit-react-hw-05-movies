import { Switch, Route } from 'react-router';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import Cast from './views/Cast/Cast';
import Reviews from './views/Reviews/Reviews';
import NotFoundView from 'views/NotFoundViews';
import './App.css';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId" exact>
          <MovieDetailsPage />
        </Route>
        <Route path="/movies/:movieId/cast" exact>
          <Cast />
        </Route>
        <Route path="/movies/:movieId/reviews" exact>
          <Reviews />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
