import { StyledTimerWrapper, StyledTimerTime, StyledTimerLabel } from './styles';

export const Timer = ({ label, time }) => {
  const parseTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <StyledTimerWrapper>
      <StyledTimerTime>{parseTime(time)}</StyledTimerTime>
      <StyledTimerLabel>{label}</StyledTimerLabel>
    </StyledTimerWrapper>
  );
};
