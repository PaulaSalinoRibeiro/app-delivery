import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Register from './pages/user/Register';

function Routes() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/register" element={ <Register /> } />
        </Switch>
      </main>
    </div>
  );
}
export default Routes;
