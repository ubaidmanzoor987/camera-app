import React from 'react';
import Image from 'next/image';
import perImage from '@/assets/svg/permission.svg';
import { Container, PermHeading, Button, Main, ContentDiv } from './index.styles';
const PermissionScreen = () => {
  return (
    <Main>
      <Container>
        <div>
          <Image src={perImage} />
        </div>
        <PermHeading>Unable your Camera and Microphone.</PermHeading>
        <ContentDiv>
          <ul style={{ listStyleType: 'disc' }}>
            <li>Click the "unblock" button below.</li>
            <li>When prompted, click "Allow"</li>
          </ul>
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            Unblock
          </Button>
        </ContentDiv>
      </Container>
    </Main>
  );
};

export default PermissionScreen;
