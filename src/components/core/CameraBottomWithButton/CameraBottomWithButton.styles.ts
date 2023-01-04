import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const Div = styled.div`
  width: 100%;
  color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
`;

export const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivSvg = styled.div`
  padding: 0px 0px 1px 0px;
`;
export const DivTime = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 30px;
`;
export const DivButton = styled.div<{
  disAble: boolean;
}>`
  ${({ disAble }) =>
    disAble
      ? `pointer-events: none;
      opacity: 0.7;
        display: flex;
        justify-content: center; `
      : `
  display: flex;
  justify-content: center;
`}
`;
