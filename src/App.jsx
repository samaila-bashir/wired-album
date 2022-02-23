import Album from './components/albums/album-component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Photos from './components/photos/photos-component';

function App() {
  return (
    <Router>
      <div className="homepage">
        <Switch>
          <Route exact path="/">
            <Album />
          </Route>
          <Route exact path="/photos/:id">
            <Photos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
