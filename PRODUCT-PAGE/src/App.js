import { Header } from 'components/Header';
import { StyledMain, StyledOverlay } from 'GlobalStyles';
import { useScreenSize } from 'hooks/useScreenSize';
import { ProductPage } from 'pages/ProductPage';
import { useEffect, useRef, useState } from 'react';

export const App = () => {
  const { isMobile } = useScreenSize();
  const [showOverlay, setShowOverlay] = useState(false);
  const [product, setProduct] = useState({});
  const headerRef = useRef();

  const handleMenuOpen = ({ isOpen }) => {
    setShowOverlay(!isOpen);
  };

  const handleCloseMenu = () => {
    headerRef.current.closeMenu();
    setShowOverlay(false);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('./products.json');
      const data = await response.json();
      setProduct(data?.products[0]);
    })();
  }, []);

  return (
    <>
      {isMobile && showOverlay && <StyledOverlay onClick={handleCloseMenu} />}
      <Header onMenuOpen={handleMenuOpen} ref={headerRef} />
      <StyledMain>
        <ProductPage product={product} />
      </StyledMain>
    </>
  );
};
