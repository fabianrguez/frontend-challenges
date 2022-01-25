import { StyledOverlay } from 'GlobalStyles';
import { useScreenSize } from 'hooks/useScreenSize';
import { useState } from 'react';
import { Header } from './components/Header';

export const App = () => {
  const { isMobile } = useScreenSize();
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMenuOpen = ({ isOpen }) => {
    setShowOverlay(!isOpen);
  };

  return (
    <>
      {isMobile && showOverlay && <StyledOverlay />}
      <Header onMenuOpen={handleMenuOpen} />
    </>
  );
};
