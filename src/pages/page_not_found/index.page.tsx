import router from 'next/router';
import React from 'react';
import Button from '@/components/core/Button';

import { BixDiv, ClientText, DivHeading, DivHomeButton, DivLayout, DivWrapper } from './index.styles';

/**
 *
 * @returns Home page
 *
 */
const PageNotFound = () => {
  const handleStarted = () => {
    router.push('/language');
  };
  return (
    <BixDiv>
      <DivWrapper>
        <DivLayout>
          <DivHeading>Video KYC</DivHeading>
        </DivLayout>
        <ClientText>Unable to load App due to some reason</ClientText>
      </DivWrapper>
      <DivHomeButton>
        <Button onClick={handleStarted} disabled={true} className="m-auto fw-bold">
          Get Started
        </Button>
      </DivHomeButton>
    </BixDiv>
  );
};

export default PageNotFound;
