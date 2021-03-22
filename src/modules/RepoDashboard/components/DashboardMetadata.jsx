import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from '@material-ui/core';

const MetadataCard = styled(Card)`
  && {
    padding: 1rem 2rem;
    border: 2px solid var(--info);
    border-radius: 0;
  }
`;

const MetadataWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MetadataDisplay = styled.div(({ risk }) => {
  let color = 'inherit';

  if (risk <= 10) color = 'var(--success)';
  if (risk <= 7) color = 'var(--warning)';
  if (risk <= 3) color = 'var(--error)';

  return `
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: bold;

    span {
      color: ${color};
      font-size: 2.4em;
    }
  `;
});

const getAverageRisk = (repos) => {
  const totalRisk = repos.reduce((accumulator, { riskScore }) => {
    const addedScore = accumulator + riskScore;
    return addedScore;
  }, 0);

  return totalRisk / repos.length;
};

const DashboardMetadata = (props) => {
  const { repos } = props;
  const averageRisk = getAverageRisk(repos);

  return (
    <MetadataCard>
      <MetadataWrapper>
        <MetadataDisplay>
          Total Repo
          {repos.length > 1 ? 's' : ''}
          <span>{repos.length}</span>
        </MetadataDisplay>
        <MetadataDisplay risk={averageRisk}>
          Average Score
          <span>{averageRisk}</span>
        </MetadataDisplay>
      </MetadataWrapper>
    </MetadataCard>
  );
};

DashboardMetadata.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      riskScore: PropTypes.number.isRequired
    })
  ).isRequired
};

export default DashboardMetadata;
