import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const CopyTextContainer = styled.button`
  border: none;
  background: inherit;
  padding: 0;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  cursor: pointer;

  & > *:first-child {
    margin-right: 5px;
  }
`;

const ColoredFileCopyItem = styled(FileCopyIcon)`
  color: var(--info);
`;

const TooltipWrapper = styled.div`
  & .MuiTooltip-tooltip {
    font-size: 1em !important;
  }
`;

const copyTextToClipboard = (text, callback) => {
  const dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
  if (callback) callback();
};

const CopyText = ({ text }) => {
  const [isHovering, setHovering] = useState(false);
  const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <TooltipWrapper>
        <Tooltip
          PopperProps={{
            disablePortal: true
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title="Copied!"
          arrow
        >
          <CopyTextContainer
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={() => copyTextToClipboard(text, handleTooltipOpen)}
            onKeyPress={() => copyTextToClipboard(text, handleTooltipOpen)}
            title="Copy Repository Url"
          >
            <span className="copy-text">{text}</span>
            {isHovering ? <ColoredFileCopyItem /> : null}
          </CopyTextContainer>
        </Tooltip>
      </TooltipWrapper>
    </ClickAwayListener>
  );
};

CopyText.propTypes = {
  text: PropTypes.string.isRequired
};

export default CopyText;
