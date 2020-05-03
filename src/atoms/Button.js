import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: inline-block;
  overflow: hidden;
  font-size: 1rm;
  font-weight: 700;
  padding: .5rem 1rem;
  cursor: pointer;
  position: relative;
  
  &.simple {
    --btn-main-color: ${({theme}) => theme.simple};
    --btn-text-color: ${({theme}) => theme.simple_complementary};
  }
  &.primary {
    --btn-main-color: ${({theme}) => theme.primary};
    --btn-text-color: ${({theme}) => theme.primary_complementary};
  }
  &.secondary {
    --btn-main-color: ${({theme}) => theme.secondary};
    --btn-text-color: ${({theme}) => theme.secondary_complementary};
  }
  &.warning {
    --btn-main-color: ${({theme}) => theme.warning};
    --btn-text-color: ${({theme}) => theme.warning_complementary};
  }
  &.danger {
    --btn-main-color: ${({theme}) => theme.danger};
    --btn-text-color: ${({theme}) => theme.danger_complementary};
  }
  
  color: var(--btn-text-color);
  background-color: var(--btn-main-color);
  border: 2px solid var(--btn-main-color);
  &:not(.simple).outlined {
    color: var(--btn-main-color);
    background-color: ${({theme}) => theme.simple}
  }
  &.simple {
    border-color: var(--btn-text-color);
  }
  @keyframes skeleton {
    from {
      opacity: 0.6;
    }
    to {
      opacity: 0.3;
    }
  }
  &.skeleton, &.skeleton.outlined {
    background-color: gray;
    border-color: gray;
    animation: 2s ease 2s infinite alternate skeleton;
    color: transparent;
  }
  outline: 0;
  
  &:enabled:focus {
    box-shadow: 1px 1px 3px rgba(50, 115, 220, .25);
  }
  
  &:enabled:hover {
    box-shadow: 1px 1px 3px #aaa;
  }
  
  &:enabled:active {
    box-shadow: none;
  }
  
  &.disabled {
    cursor: inherit;
    opacity: 0.6;
  }
  .wrapper {
    display: grid;
    height: 100%;
    width:100%;
  }
  & > .wrapper > .text, & > .wrapper > .cancel-action {
    grid-area: 1 / 1 / 2 / 2;
  }
  &.cancel > .wrapper > .text, &:not(.cancel) > .wrapper > .cancel-action {
    visibility: hidden;
  } 
  & > div.waiting {
    background-color: var(--btn-text-color);
    border: none;
    bottom: 0;
    height: 0.25rem;
    width: 100%;
    margin-left: 0;
    position: absolute;
  }
  &:not(.simple).outlined > div.waiting {
    background-color: var(--btn-main-color);
  }
  @keyframes waiting {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }
  &.waiting > div.waiting {
    animation: 2s linear infinite waiting;
  }  
  @keyframes progress {
    from {
      left: -100%;
    }
    to {
      left: 0%;
    }
  }
  &.cancel > div.waiting {
    animation: ${({delay}) => (delay || 2000) / 1000}s linear progress;
  }

  &.small {
    font-size: .7rem;
    padding: .3rem .6rem;
    border-width: 1px;
  }
  &.big {
    font-size: 1.3rem;
    padding: .6rem 1.3rem;
  }
}
`;

export const Button = ({
                         small, big,
                         primary, secondary, warning, danger,
                         outlined,
                         disabled, skeleton, waiting,
                         delay, cancelLabel,
                         onClick,
                         children
                       }) => {
  const [timerId, setTimerId] = useState(null);

  const hasDelay = delay > 0 || delay === 0;

  const _cancelClick = () => {
    clearTimeout(timerId);
    setTimerId(null);
  }

  const _onClick = e => {
    e.preventDefault();
    if (timerId) {
      // Cancel the current request
      _cancelClick();
    } else if (!delay) {
      onClick();
    } else {
      setTimerId(setTimeout(() => {
        onClick();
        setTimerId(null);
      }, delay));
    }
  }

  if (timerId && disabled) {
    // Cancel the current request if disabled
    _cancelClick();
  }

  const classes = Object.entries({
    primary: primary && !secondary && !warning && !danger,
    secondary: !primary && secondary && !warning && !danger,
    warning: !primary && !secondary && warning && !danger,
    danger: !primary && !secondary && !warning && danger,
    outlined: outlined,
    skeleton: skeleton,
    waiting: waiting && !timerId,
    disabled: disabled || waiting || skeleton,
    small: small && !big,
    big: !small && big,
    cancel: !!timerId,
  }).filter(([_, value]) => value).map(([key]) => key);
  if (!classes.includes('primary') && !classes.includes('secondary') && !classes.includes('warning') && !classes.includes('danger')) {
    // if no style => simple style
    classes.push('simple');
  }

  return (
    <ButtonStyled className={classes.join(' ')} disabled={disabled || waiting || skeleton} delay={delay}
                  onClick={_onClick}>
      <div className="wrapper">
        <div className="text">{children}</div>
        {hasDelay && <div className={`cancel-action ${timerId ? 'waiting' : ''}`}>{cancelLabel || 'Cancel'}</div>}
      </div>
      {(waiting || timerId) && <div className="waiting"/>}
    </ButtonStyled>
  );
}

Button.defaultProps = {
  delay: null,
  cancelLabel: 'Cancel'
}

Button.prototype = {
  small: PropTypes.bool,
  big: PropTypes.bool,
  delay: PropTypes.number,
  cancelLabel: PropTypes.string,
  disabled: PropTypes.bool,
  waiting: PropTypes.bool,
  skeleton: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outlined: PropTypes.bool,
  onClick: PropTypes.func,
};