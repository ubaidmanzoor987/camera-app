import { DiAndroid } from 'react-icons/di';
import { BsWindows, BsApple } from 'react-icons/bs';
import { BiMessageAlt } from 'react-icons/bi';
import { MdDesktopMac } from 'react-icons/md';
import React from 'react';
import {
  BixDiv,
  DivHeading,
  ContactIcon,
  DivLayout,
  DivWrapper,
  Headpar,
  DivScreen,
  StyledLine,
  GoogleSpan,
  TitleSpan,
  ContainerDiv,
  DivIcon,
  ContactDiv,
} from './index.styles';

/**
 *
 
 *
 */
const onBoard = () => {
  return (
    <>
      <ContainerDiv>
        <BixDiv>
          <DivWrapper>
            <DivHeading>User Onboarding Process</DivHeading>
            <DivLayout>
              <DivHeading>Hi..., You are using Chrome 103 on Linux 0</DivHeading>
              <Headpar>
                this browser and device combination,does
                <br /> not support video calling.
                <br />
                please copy the link and open it any of the below browser combination.this link will expire in 10
                minutes
              </Headpar>
              <DivScreen>
                <span>
                  <DivIcon>
                    <DiAndroid />
                  </DivIcon>{' '}
                  <TitleSpan>For Android</TitleSpan>
                </span>
                <TitleSpan>
                  Use:<GoogleSpan>Google Chrome V65+</GoogleSpan>
                </TitleSpan>
                <StyledLine />
              </DivScreen>
              <DivScreen>
                <span>
                  <DivIcon>
                    {' '}
                    <BsApple />{' '}
                  </DivIcon>{' '}
                  <TitleSpan>For Iphone</TitleSpan>
                </span>
                <TitleSpan>
                  Use:<GoogleSpan>Safari V12+</GoogleSpan>
                </TitleSpan>
                <TitleSpan>
                  Use:<GoogleSpan>Google Chrome V65+</GoogleSpan>
                </TitleSpan>
                <StyledLine />
              </DivScreen>
              <DivScreen>
                <span>
                  <DivIcon>
                    {' '}
                    <BsWindows />
                  </DivIcon>{' '}
                  <TitleSpan>For Windows Desktop</TitleSpan>
                </span>
                <TitleSpan>
                  Use:<GoogleSpan>Google Chrome V65+</GoogleSpan>
                </TitleSpan>
                <TitleSpan>
                  Use:<GoogleSpan>Microsoft Edge</GoogleSpan>
                </TitleSpan>
                <StyledLine />
              </DivScreen>
              <DivScreen>
                <span>
                  <DivIcon>
                    {' '}
                    <MdDesktopMac />
                  </DivIcon>{' '}
                  <TitleSpan>For MAC</TitleSpan>
                </span>
                <TitleSpan>
                  Use:<GoogleSpan>Safari V12+</GoogleSpan>
                </TitleSpan>
                <TitleSpan>
                  Use:<GoogleSpan>Google Chrome V65+</GoogleSpan>
                </TitleSpan>
                <StyledLine />
              </DivScreen>
            </DivLayout>
          </DivWrapper>
          <ContactDiv>
            <ContactIcon>
              <BiMessageAlt />{' '}
            </ContactIcon>
          </ContactDiv>
        </BixDiv>
      </ContainerDiv>
    </>
  );
};

export default onBoard;
