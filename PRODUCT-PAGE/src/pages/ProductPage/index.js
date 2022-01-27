import { ImageGallery } from 'components/ImageGallery';
import { ProductInfo } from 'components/ProductInfo';
import { StyledProductPageWrapper } from './styles';

export const ProductPage = ({ product }) => {
  return (
    <StyledProductPageWrapper>
      <ImageGallery images={product?.images} />
      <ProductInfo {...product} />
    </StyledProductPageWrapper>
  );
};
