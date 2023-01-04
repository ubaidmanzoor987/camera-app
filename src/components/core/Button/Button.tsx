import React, { MouseEventHandler } from 'react';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';

import { ButtonStyled } from './Button.styles';

interface IButtonProps {
  className?: string;
  type?: 'reset' | 'submit' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  name?: string;
  backgroundColor?: string;
  hoverColor?: string;
  isBottom?: boolean;
  id?: string;
  isTransparent?: boolean;
}

/**
 * Reusable button component
 */
const Button: React.FC<React.PropsWithChildren<IButtonProps>> = ({ children, ...props }) => {
  const { selectedColor } = useAppSelector(getAppDataSelector);
  return (
    <ButtonStyled backgroundColor={selectedColor.caret_color} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
