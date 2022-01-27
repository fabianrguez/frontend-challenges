import styled from 'styled-components';

export const StyledProductPageWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 6rem;
  margin-bottom: 6rem;

  @media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
    flex-direction: column;
    gap: 2rem;
  }
`;
