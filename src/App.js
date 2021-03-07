import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Index from './components/index/Index';
import Update from './components/update/Update';
import NotFound from './components/not-found/NotFound';

function App() {
  return (
    <div className="App">
      <h2>dnudnwn</h2>
      <Switch>
        <Route path = "/update" Component = {Update}/>
        <Route path = "/not-found" Component = {NotFound} />
        <Route path = "/" Component = {Index} />
        <Redirect to = "/not-found"  />
      </Switch>
    </div>
  );
}

export default App;
