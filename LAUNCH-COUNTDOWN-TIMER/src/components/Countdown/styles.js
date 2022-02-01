import styled from 'styled-components';

export const StyledCountdownWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;
