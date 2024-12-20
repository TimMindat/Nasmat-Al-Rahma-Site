import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import RouterConfig from './utils/routing/RouterConfig';

function App() {
  return (
    <Router>
      <Layout>
        <RouterConfig />
      </Layout>
    </Router>
  );
}

export default App;