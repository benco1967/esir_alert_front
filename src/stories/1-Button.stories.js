import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Button} from '../atoms/Button';
import styled, {ThemeProvider} from 'styled-components';
import Theme from "../styles/theme";

export default {
  title: 'Button',
  component: Button,
  decorators: [story => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>],
};

const BUTTONS = [
  (props) => (<Button onClick={action('default clicked')} {...props}>Default</Button>),
  (props) => (<Button onClick={action('primary clicked')} {...props} primary>Primary</Button>),
  (props) => (<Button onClick={action('secondary clicked')} {...props} secondary>Secondary</Button>),
  (props) => (<Button onClick={action('warning clicked')} {...props} warning>Warning</Button>),
  (props) => (<Button onClick={action('danger clicked')} {...props} danger>Danger</Button>),
];
const FLAGS = {
  France: (<svg xmlns="http://www.w3.org/2000/svg"
                width="45" height="30" viewBox="0 0 3 2">
    <rect width="1" height="2" x="0" fill="#004686"/>
    <rect width="1" height="2" x="1" fill="#ffffff"/>
    <rect width="1" height="2" x="2" fill="#d2232c"/>
  </svg>),
  Belgium: (<svg xmlns="http://www.w3.org/2000/svg"
                 width="45" height="30" viewBox="0 0 3 2">
    <rect width="1" height="2" x="0" fill="#000000"/>
    <rect width="1" height="2" x="1" fill="#ffff00"/>
    <rect width="1" height="2" x="2" fill="#d2232c"/>
  </svg>),
  Italy: (<svg xmlns="http://www.w3.org/2000/svg"
               width="45" height="30" viewBox="0 0 3 2">
    <rect width="1" height="2" x="0" fill="#008646"/>
    <rect width="1" height="2" x="1" fill="#ffffff"/>
    <rect width="1" height="2" x="2" fill="#d2232c"/>
  </svg>),

}

const PresentationStyled = styled.div`
  > * {
    margin: 5px;
  }
`;

export const Standard = () => (<PresentationStyled>{BUTTONS.map(f => f())}</PresentationStyled>);

export const Outlined = () => (<PresentationStyled>{BUTTONS.map(f => f({outlined: true}))}</PresentationStyled>);

export const Emoji = () => (
  <PresentationStyled><Button onClick={action('clicked')}><span role="img" aria-label="letter">✉</span> With emoji <span
    role="img" aria-label="smiley">😊</span></Button></PresentationStyled>);

export const Image = () => (<PresentationStyled>{Object.entries(FLAGS).map(([country, flag]) => (
  <Button onClick={action('clicked')} secondary>
    <div>{country}</div>
    {flag}</Button>))}</PresentationStyled>);

export const Small = () => (<PresentationStyled>{BUTTONS.map(f => f({small: true}))}</PresentationStyled>);

export const Big = () => (<PresentationStyled>{BUTTONS.map(f => f({big: true}))}</PresentationStyled>);

export const Waiting = () => (<PresentationStyled>{BUTTONS.map(f => f({waiting: true}))}</PresentationStyled>);

export const OutlinedWaiting = () => (
  <PresentationStyled>{BUTTONS.map(f => f({outlined: true, waiting: true}))}</PresentationStyled>);

export const Disabled = () => (<PresentationStyled>{BUTTONS.map(f => f({disabled: true}))}</PresentationStyled>);

export const OutlineAndDisabled = () => (
  <PresentationStyled>{BUTTONS.map(f => f({outlined: true, disabled: true}))}</PresentationStyled>);

export const WithDelay = () => (<PresentationStyled>{BUTTONS.map(f => f({delay: 4000}))}</PresentationStyled>);

export const OutlinedWithDelay = () => (
  <PresentationStyled>{BUTTONS.map(f => f({outlined: true, delay: 4000}))}</PresentationStyled>);

export const WithDelayAndLongCancelLabel = () => (
  <PresentationStyled>{BUTTONS.map(f => f({delay: 4000, cancelLabel: 'Click here to cancel!'}))}</PresentationStyled>);

export const Skeleton = () => (<PresentationStyled>{BUTTONS.map(f => f({skeleton: true}))}</PresentationStyled>);

export const SkeletonAndOutlined = () => (
  <PresentationStyled>{BUTTONS.map(f => f({outlined: true, skeleton: true}))}</PresentationStyled>);

const StorieToggleDisabled = () => {
  const [disabled, setDisabled] = useState(false);
  return (<PresentationStyled>
    <Button onClick={action('clicked')} disabled={disabled} primary delay={6000}>Default</Button>
    <Button onClick={() => {
      setDisabled(!disabled);
      action('toggle disbaled')();
    }}>Toggle disabled on other button</Button>
  </PresentationStyled>);
}

export const DuringDelayDisabledCancelClick = () => (<StorieToggleDisabled>
  <Button onClick={action('clicked')} primary delay={6000}>Default</Button>
  <Button onClick={action('toggle disbaled')}>Toggle disabled on other button</Button>
</StorieToggleDisabled>);


