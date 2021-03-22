import React from 'react';
import styled from 'styled-components';

import { Container } from '@material-ui/core';

const Header = styled.header`
  background-color: var(--black);
  color: var(--white);
  height: 6rem;
`;

const HeaderWrapper = styled(Container)`
  && {
    display: flex;
    align-items: center;
    height: 100%;

    h1 {
      line-height: 1em;
      font-size: var(--heading2);
    }
  }
`;

export default () => (
  <Header>
    <HeaderWrapper>
      <h1>Repository Dashboard</h1>
    </HeaderWrapper>
  </Header>
);
