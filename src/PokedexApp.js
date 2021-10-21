import React from 'react';
import { Provider } from 'react-redux';
import { Sidebar } from './layout/Sidebar';
import { store } from './store/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PokemonsPage } from './pages/PokemonsPage';

export const PokedexApp = () => {
  return (
    <Provider store={store}>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-3 backgroundSidebar d-flex align-content-between flex-wrap'>
            <Sidebar />
          </div>
          <div class='col-7'>
            
          </div>
        </div>
      </div>
      {/* <Router>
        <Switch>
          <Route exact path='/'>
            <PokemonsPage />
          </Route>
        </Switch>
      </Router> */}
    </Provider>
  );
};
