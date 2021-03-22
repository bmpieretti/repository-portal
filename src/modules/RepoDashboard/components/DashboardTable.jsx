import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Table } from '../../Shared';

const UrlDisplay = styled.small`
  color: var(--lightGrey);
`;

const DashboardTable = ({ repos }) => {
  const data = React.useMemo(
    () =>
      repos.map((repo) => {
        const { url, name, type, riskScore, latestActivity } = repo;
        return {
          col1: (
            <>
              <div>{name}</div>
              <UrlDisplay>{url}</UrlDisplay>
            </>
          ),
          col2: type,
          col3: riskScore,
          col4: latestActivity,
          col5: <button type="button">Details</button>
        };
      }),
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Repo Name',
        accessor: 'col1'
      },
      {
        Header: 'Type',
        accessor: 'col2'
      },
      {
        Header: 'Risk',
        accessor: 'col3'
      },
      {
        Header: 'Last Updated',
        accessor: 'col4'
      },
      {
        Header: 'Actions',
        accessor: 'col5'
      }
    ],
    []
  );

  return <Table columns={columns} data={data} height={400} />;
};

DashboardTable.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      riskScore: PropTypes.number.isRequired,
      type: PropTypes.oneOf(['public', 'private']),
      latestActivity: PropTypes.instanceOf(Date)
    })
  ).isRequired
};

export default DashboardTable;
