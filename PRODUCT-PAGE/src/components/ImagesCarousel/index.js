import { StyledCarouselItem, StyledCarouselWrapper } from './styles';

export const ImagesCarousel = ({ images }) => {
  return (
    <StyledCarouselWrapper>
      {images &&
        images.map((image) => (
          <StyledCarouselItem key={image.id}>
            <img src={image.path} alt={image.id} />
          </StyledCarouselItem>
        ))}
    </StyledCarouselWrapper>
  );
};
