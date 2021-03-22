import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRepos } from '../actions/repos';
import { getRepos } from '../store/repos';

import DashboardMetadata from './DashboardMetadata';
import DashboardTable from './DashboardTable';

const DashboardContainer = styled(Container)`
  && {
    margin-top: var(--defaultSpacing);

    & > * {
      margin-bottom: var(--defaultSpacing);
    }
  }
`;

const Loading = styled(CircularProgress)`
  && {
    color: var(--info);
  }
`;

const renderContent = (repoData) => {
  const { state, data, error } = repoData;

  if (state === 'loading') return <Loading />;
  if (state === 'error') {
    return (
      <div>
        Error:
        {error.toString()}
      </div>
    );
  }

  return (
    <>
      <DashboardMetadata repos={data} />
      <DashboardTable repos={data} />
    </>
  );
};

export default () => {
  const repoData = useSelector(getRepos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  return <DashboardContainer>{renderContent(repoData)}</DashboardContainer>;
};
