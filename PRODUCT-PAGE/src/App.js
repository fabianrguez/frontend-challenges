import { Header } from 'components/Header';
import { StyledMain, StyledOverlay } from 'GlobalStyles';
import { useScreenSize } from 'hooks/useScreenSize';
import { ProductPage } from 'pages/ProductPage';
import { useEffect, useState } from 'react';

export const App = () => {
  const { isMobile } = useScreenSize();
  const [showOverlay, setShowOverlay] = useState(false);
  const [product, setProduct] = useState({});

  const handleMenuOpen = ({ isOpen }) => {
    setShowOverlay(!isOpen);
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
      {isMobile && showOverlay && <StyledOverlay />}
      <Header onMenuOpen={handleMenuOpen} />
      <StyledMain>
        <ProductPage product={product} />
      </StyledMain>
    </>
  );
};
