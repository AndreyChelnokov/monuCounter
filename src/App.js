import './App.css';
import { Switch, Route } from 'react-router-dom';
import Menu from "./compotents/Menu/Menu";
import Home from './compotents/home/Home';
import Account from './compotents/account/Account';
import Stat from "./compotents/stat/Stat";
import Type from "./compotents/type/Type";

function App() {
  return (
    <div className="app-wrap">
      <div className="content">
        <Switch>
            <Route path='/account' component={Account} />
            <Route path='/type' component={Type} />
            <Route path='/stat' component={Stat} />
            <Route exect path='/' component={Home} />
        </Switch>
      </div>
      <Menu />
    </div>
  );
}

export default App;
