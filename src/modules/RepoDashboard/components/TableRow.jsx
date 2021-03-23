import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { formatDistanceToNow } from 'date-fns';
import { CopyText } from '../../Shared';

const UrlSubText = styled.small`
  color: var(--darkGrey);
  max-width: 300px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BoxWrapper = styled(Box)`
  margin: var(--defaultSpacing);
  margin-top: 0;

  hr {
    margin-top: 0;
    border-bottom: 2px solid var(--info);
  }
`;

const CopyUrl = styled.div`
  margin-bottom: var(--defaultSpacing);
  display: flex;
  justify-content: center;
  align-items: center;

  small {
    margin-right: 0.5rem;
  }
`;

const DataDisplay = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;

  span {
    display: block;
    font-size: 1.2em;
    font-weight: bold;
  }
`;

function Row({ repo }) {
  const [open, setOpen] = React.useState(false);
  const lastUpdated = repo.lastActivity
    ? formatDistanceToNow(new Date(repo.lastActivity), { addSuffix: true })
    : 'Unknown';

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <div>{repo.name}</div>
          <UrlSubText title={repo.url}>{repo.url}</UrlSubText>
        </TableCell>
        <TableCell>{repo.type}</TableCell>
        <TableCell>{lastUpdated}</TableCell>
        <TableCell>{repo.riskScore}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <BoxWrapper>
              <hr />
              <CopyUrl>
                <small>Repository Url: </small>
                <CopyText text={repo.url} />
              </CopyUrl>
              <DataDisplay>
                <div>
                  Clones:
                  <span>{repo.cloneCount || 'Unknown'}</span>
                </div>
                <div>
                  Commits:
                  <span>{repo.cloneCount || 'Unknown'}</span>
                </div>
                <div>
                  Contributions:
                  <span>{repo.contributionCount || 'Unknown'}</span>
                </div>
                <div>
                  Size:
                  <span>{repo.size || 'Unknown'}</span>
                </div>
              </DataDisplay>
            </BoxWrapper>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    riskScore: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['public', 'private']).isRequired,
    lastActivity: PropTypes.string,
    contributionCount: PropTypes.number,
    cloneCount: PropTypes.number,
    commitCount: PropTypes.number,
    size: PropTypes.number
  }).isRequired
};

export default Row;
