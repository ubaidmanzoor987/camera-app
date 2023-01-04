import React from 'react';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';

import { DivContainer, IMG, ClientText } from './WaterMark.styles';
const WaterMarkText = () => {
  const { getVcipLink } = useAppSelector(getAppDataSelector);

  return (
    <DivContainer>
      <IMG src={'data:image/png;base64, ' + getVcipLink?.acclogo} alt="ok" />
      <ClientText>{getVcipLink.clientname}</ClientText>
    </DivContainer>
  );
};

export default WaterMarkText;
