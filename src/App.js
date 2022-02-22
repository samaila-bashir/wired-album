import Album from './components/albums/album-component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Photos from './components/photos/photos-component';
import Navbar from "./components/navbar/Navbar-component";

function App() {
  return (
    <Router>
      <div className="homepage">
        <Navbar />
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
