import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ROUTES, { RenderRoutes } from 'app/routes';

function App() {
  return (
    <div className="App">
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
