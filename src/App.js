import { Redirect, Route, Switch } from 'react-router-dom';
import AllNews from './pages/AllNews';
import NotFound from './pages/NotFound';
import Story from './pages/Story';
const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/HackerNewsClone/news" />
      </Route>
      <Route path="/HackerNewsClone/news" exact>
        <AllNews />
      </Route>
      <Route path="/HackerNewsClone/news/:storyId">
        <Story />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
