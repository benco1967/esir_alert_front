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

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: monospace;
`;
const Info = styled.div`
  font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;;
`;

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

export const Standard = () => (
  <>
    <PresentationStyled>
      <Title>&lt;Button small ...&gt;</Title>
      {BUTTONS.map(f => f({small: true}))}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button ...&gt;</Title>
      {BUTTONS.map(f => f())}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button big ...&gt;</Title>
      {BUTTONS.map(f => f({big: true}))}
    </PresentationStyled>
  </>
);

export const Outlined = () => (
  <>
    <PresentationStyled>
      <Title>&lt;Button small outlined ...&gt;</Title>
      {BUTTONS.map(f => f({outlined: true, small: true}))}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button outlined ...&gt;</Title>
      {BUTTONS.map(f => f({outlined: true}))}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button big outlined ...&gt;</Title>
      {BUTTONS.map(f => f({outlined: true, big: true}))}
    </PresentationStyled>
  </>
);

export const StandardAndRound = () => (
  <>
    <PresentationStyled>
      <Title>&lt;Button small round ...&gt;</Title>
      {BUTTONS.map(f => f({round: true, small: true}))}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button round ...&gt;</Title>
      {BUTTONS.map(f => f({round: true}))}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button big round ...&gt;</Title>
      {BUTTONS.map(f => f({round: true, big: true}))}
    </PresentationStyled>
  </>
);

export const OutlinedAndRound = () => (
  <>
    <PresentationStyled>
      <Title>&lt;Button small round outlined ...&gt;</Title>
      {BUTTONS.map(f => f({outlined: true, round: true, small: true}))}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button round outlined ...&gt;</Title>
      {BUTTONS.map(f => f({outlined: true, round: true}))}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button big round outlined ...&gt;</Title>
      {BUTTONS.map(f => f({outlined: true, round: true, big: true}))}
    </PresentationStyled>
  </>
);

export const Emoji = () => (
  <PresentationStyled>
    <Title>&lt;Button&gt;<span role="img" aria-label="letter">✉</span> With emoji <span
      role="img" aria-label="smiley">😊</span>&lt;/Button&gt;</Title>
    <Button onClick={action('clicked')}><span role="img" aria-label="letter">✉</span> With emoji <span
      role="img" aria-label="smiley">😊</span></Button>
  </PresentationStyled>
);

export const Image = () => (
  <>
    <PresentationStyled>
      <Title>&lt;Button secondary&gt;&lt;div&gt;country&lt;/div&gt;&lt;svg&gt;...&lt;/svg&gt;&lt;/Button&gt;</Title>
      {Object.entries(FLAGS).map(([country, flag]) => (
        <Button onClick={action('clicked')} secondary>
          <div>{country}</div>
          {flag}</Button>))}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button secondary
        round&gt;&lt;div&gt;country&lt;/div&gt;&lt;svg&gt;...&lt;/svg&gt;&lt;/Button&gt;</Title>
      {Object.entries(FLAGS).map(([country, flag]) => (
        <Button onClick={action('clicked')} secondary round>
          <div>{country}</div>
          {flag}</Button>))}
    </PresentationStyled>
  </>
);

export const Waiting = () => (
  <>
    <PresentationStyled>
      <Title>&lt;Button waiting ...&gt;</Title>
      {BUTTONS.map(f => f({waiting: true}))}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button outlined waiting ...&gt;</Title>
      {BUTTONS.map(f => f({outlined: true, waiting: true}))}
    </PresentationStyled>
  </>
);

export const Disabled = () => (
  <>
    <PresentationStyled>
      <Title>&lt;Button disabled ...&gt;</Title>
      {BUTTONS.map(f => f({disabled: true}))}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button outlined disabled ...&gt;</Title>
      {BUTTONS.map(f => f({outlined: true, disabled: true}))}
    </PresentationStyled>
  </>
);

export const WithDelay = () => (
  <>
    <Info>
      The button will call the onClick callback after the delay,
      if the button is clicked again before the end of the delay
      the callback will be never called
    </Info>
    <PresentationStyled>
      <Title>&lt;Button delay="4000" ...&gt;</Title>
      {BUTTONS.map(f => f({delay: 4000}))}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button outlined delay="4000" ...&gt;</Title>
      {BUTTONS.map(f => f({outlined: true, delay: 4000}))}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button delay="4000" cancelLabel="Click here to cancel!" ...&gt;</Title>
      <Info>the button width is the max of the cancel label width and main label width</Info>
      {BUTTONS.map(f => f({delay: 4000, cancelLabel: 'Click here to cancel!'}))}
    </PresentationStyled>
  </>
);

export const Skeleton = () => (
  <>
    <PresentationStyled>
      <Title>&lt;Button skeleton ...&gt;</Title>
      {BUTTONS.map(f => f({skeleton: true}))}
    </PresentationStyled>
    <PresentationStyled>
      <Title>&lt;Button skeleton outlined ...&gt;</Title>
      {BUTTONS.map(f => f({outlined: true, skeleton: true}))}
    </PresentationStyled>
  </>
);

const StorieToggleDisabled = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <PresentationStyled>
      <Title>&lt;Button delay="4000" ...&gt;</Title>
      <Info>
        you can disabled the left button with the right one,
        if you click on the left button then disable it,
        it will never calls onClick callback
      </Info>
      <Button onClick={action('clicked')} disabled={disabled} primary delay={6000}>Default</Button>
      <Button onClick={() => {
        setDisabled(!disabled);
        action('toggle disabled')();
      }}>Toggle disabled on other button</Button>
    </PresentationStyled>
  );
}

export const DuringDelayDisabledCancelClick = () => (
  <StorieToggleDisabled/>
);


