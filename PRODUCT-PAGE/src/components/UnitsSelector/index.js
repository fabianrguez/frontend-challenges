import { ReactComponent as MinusIcon } from 'assets/images/icon-minus.svg';
import { ReactComponent as PlusIcon } from 'assets/images/icon-plus.svg';
import { useState } from 'react';
import { StyledUnitsSelectorUnits, StyledUnitsSelectorWrapper } from './styles';

export const UnitsSelector = ({ onChange = () => {} }) => {
  const [units, setUnits] = useState(1);

  const handleMinus = (e) => {
    e.preventDefault();
    if (units > 1) {
      const newUnits = units - 1;
      setUnits(newUnits);
      onChange(newUnits);
    }
  };

  const handlePlus = (e) => {
    e.preventDefault();
    const newUnits = units + 1;
    setUnits(newUnits);
    onChange(newUnits);
  };

  return (
    <StyledUnitsSelectorWrapper>
      <button onClick={handleMinus} disabled={units === 1}>
        <MinusIcon />
      </button>
      <StyledUnitsSelectorUnits>{units}</StyledUnitsSelectorUnits>
      <button onClick={handlePlus}>
        <PlusIcon />
      </button>
    </StyledUnitsSelectorWrapper>
  );
};
