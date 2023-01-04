import React from 'react';

import { Button } from 'react-bootstrap';

import { DivHeader, StyledText } from './HeadingButton.style';
import { IHeaderProps } from './HeadingButton.types';

function HeadingWithButton({ text, retake, onClick }: IHeaderProps) {
  return (
    <DivHeader className="container">
      <div>
        <StyledText>{text}</StyledText>
      </div>
      <div>
        <Button onClick={onClick}>
          <div className="text">{retake}</div>
        </Button>
      </div>
    </DivHeader>
  );
}

export default HeadingWithButton;
