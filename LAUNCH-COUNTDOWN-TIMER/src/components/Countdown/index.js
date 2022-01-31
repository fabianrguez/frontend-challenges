import { Timer } from 'components/Timer';
import { useCountdown } from 'hooks';
import { StyledCountdownWrapper } from './styles';

export const Countdown = () => {
  const { timeRemain } = useCountdown(new Date('February 2, 2022 13:00:00'));

  return (
    <StyledCountdownWrapper>
      <Timer label="Days" time={timeRemain?.days} />
      <Timer label="Hours" time={timeRemain?.hours} />
      <Timer label="Minutes" time={timeRemain?.minutes} />
      <Timer label="Seconds" time={timeRemain?.seconds} />
    </StyledCountdownWrapper>
  );
};
