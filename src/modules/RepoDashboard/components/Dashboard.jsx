import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  Card,
  CardContent,
  Container,
  CircularProgress
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRepos } from '../actions/repos';
import { getRepos } from '../store/repos';

const Loading = styled(CircularProgress)`
  && {
    color: var(--info);
  }
`;

export default () => {
  // eslint-disable-next-line
  const repos = useSelector(getRepos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  return (
    <Container>
      <Loading />
      <Card>
        <CardContent />
      </Card>
    </Container>
  );
};
