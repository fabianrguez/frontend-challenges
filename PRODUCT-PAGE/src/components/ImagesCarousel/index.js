import { StyledCarouselItem, StyledCarouselNavigation, StyledCarouselWrapper, StyledNavigationButton } from './styles';
import { ReactComponent as NextIcon } from 'assets/images/icon-next.svg';
import { ReactComponent as PrevIcon } from 'assets/images/icon-previous.svg';

export const ImagesCarousel = ({ images }) => {
  return (
    <StyledCarouselWrapper>
      {images &&
        images.map((image) => (
          <StyledCarouselItem key={image.id}>
            <img src={image.path} alt={image.id} />
          </StyledCarouselItem>
        ))}
      <StyledCarouselNavigation>
        <StyledNavigationButton>
          <PrevIcon />
        </StyledNavigationButton>
        <StyledNavigationButton>
          <NextIcon />
        </StyledNavigationButton>
      </StyledCarouselNavigation>
    </StyledCarouselWrapper>
  );
};
