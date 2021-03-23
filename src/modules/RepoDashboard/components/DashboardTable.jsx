import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

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

const runFilter = ({ direction, type, field }, repos) => {
  const DEFUALT_SECONDARY_FILTER = 'name';

  return repos.sort((a, b) => {
    if (type !== 'string') {
      const compareName = a[DEFUALT_SECONDARY_FILTER].localeCompare(
        b[DEFUALT_SECONDARY_FILTER]
      );

      if (type === 'date') {
        const aDate = new Date(a[field]);
        const bDate = new Date(b[field]);
        // eslint-disable-next-line
        const compareField = direction === 'asc' ? aDate - bDate : bDate - aDate;
        return compareField || compareName;
      }

      if (type === 'number') {
        // eslint-disable-next-line
        const compareField = direction === 'asc' ? a[field] - b[field] : b[field] - a[field];
        return compareField || compareName;
      }
    }

    return direction === 'asc'
      ? a[field].localeCompare(b[field])
      : a[field].localeCompare(a[field]);
  });
};

const renderCellheader = (title, currentFilterDirection) => {
  let renderCurrentFilter = null;

  if (currentFilterDirection === 'asc') {
    renderCurrentFilter = <ArrowUpwardIcon />;
  }

  if (currentFilterDirection === 'desc') {
    renderCurrentFilter = <ArrowDownwardIcon />;
  }

  return (
    <span>
      {title}
      {renderCurrentFilter}
    </span>
  );
};

const CollapsibleTable = ({ repos = [] }) => {
  const [filter, setFilter] = useState({
    direction: 'desc',
    type: 'number',
    field: 'riskScore'
  });

  const setNewFilter = (oldFilter, field, type) => {
    if (oldFilter.field === field) {
      return setFilter({
        ...oldFilter,
        direction: oldFilter.direction === 'asc' ? 'desc' : 'asc'
      });
    }

    return setFilter({
      direction: 'asc',
      field,
      type
    });
  };

  return (
    <TableContainer component={Paper}>
      <TableWrapper aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell onClick={() => setNewFilter(filter, 'name', 'string')}>
              {renderCellheader(
                'Repo Name',
                filter.field === 'name' ? filter.direction : null
              )}
            </TableCell>
            <TableCell onClick={() => setNewFilter(filter, 'type', 'string')}>
              {renderCellheader(
                'Type',
                filter.field === 'type' ? filter.direction : null
              )}
            </TableCell>
            <TableCell
              onClick={() => setNewFilter(filter, 'lastActivity', 'date')}
            >
              {renderCellheader(
                'Last Updated',
                filter.field === 'lastActivity' ? filter.direction : null
              )}
            </TableCell>
            <TableCell
              align="center"
              onClick={() => setNewFilter(filter, 'riskScore', 'number')}
            >
              {renderCellheader(
                'Risk',
                filter.field === 'riskScore' ? filter.direction : null
              )}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBodyWrapper>
          {runFilter(filter, repos).map((item) => (
            <Row key={item.id} repo={item} />
          ))}
        </TableBodyWrapper>
      </TableWrapper>
    </TableContainer>
  );
};

CollapsibleTable.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default CollapsibleTable;
