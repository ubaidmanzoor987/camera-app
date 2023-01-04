import { DiVLoader } from './index.styles';

interface ILoader {
  className?: string;
}

/**
 * Reusable Loader component
 */
const Loader: React.FC<React.PropsWithChildren<ILoader>> = ({ children, ...props }) => {
  return <DiVLoader {...props}>{children}</DiVLoader>;
};

export default Loader;
