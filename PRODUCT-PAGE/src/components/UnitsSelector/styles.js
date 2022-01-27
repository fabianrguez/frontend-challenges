import styled from 'styled-components';

export const StyledUnitsSelectorWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.lightGrayfishBlue};
  border-radius: 8px;

  & button {
    padding: 1rem;
    transition: all 0.3s;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const StyledUnitsSelectorUnits = styled.span`
  font-weight: 700;
`;
