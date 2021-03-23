import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Row from './TableRow';

const TableWrapper = styled(Table)`
  && th,
  && td {
    font-size: 1em;
  }
`;

const TableBodyWrapper = styled(TableBody)`
  && > *:nth-of-type(2n + 1) > * {
    border-bottom: none;
  }
`;

const CollapsibleTable = ({ repos = [] }) => (
  <TableContainer component={Paper}>
    <TableWrapper aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Repo Name</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Last Updated</TableCell>
          <TableCell>Risk</TableCell>
        </TableRow>
      </TableHead>
      <TableBodyWrapper>
        {repos.map((item) => (
          <Row key={item.id} repo={item} />
        ))}
      </TableBodyWrapper>
    </TableWrapper>
  </TableContainer>
);

CollapsibleTable.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default CollapsibleTable;
