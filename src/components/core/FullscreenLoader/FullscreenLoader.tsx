import { Spinner } from 'react-bootstrap';

import { DivLoaderContainer, LoadingMessage } from './FullscreenLoader.styles';

const FullscreenLoader = ({ message }: { message?: string }) => (
  <DivLoaderContainer>
    <Spinner className="loader" animation={'border'} />
    {message && <LoadingMessage>{message}</LoadingMessage>}
  </DivLoaderContainer>
);

export default FullscreenLoader;
