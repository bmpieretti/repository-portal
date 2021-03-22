import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import GlobalStyles from './Styles';
import { Dashboard } from '../../RepoDashboard';
import Header from './Header';

import store from '../store/setupStore';

const MainLayout = styled.main`
  height: 100%;

  & > * {
    margin-bottom: var(--defaultSpacing);
  }
`;

function App() {
  return (
    <MainLayout>
      <Provider store={store}>
        <GlobalStyles />
        <Header />
        <Dashboard />
      </Provider>
    </MainLayout>
  );
}

export default App;
