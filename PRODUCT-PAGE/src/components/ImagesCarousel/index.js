import {
  StyledCarouselItem,
  StyledCarouselNavigation,
  StyledCarouselContent,
  StyledNavigationButton,
  StyledCarouselWrapper,
} from './styles';
import { ReactComponent as NextIcon } from 'assets/images/icon-next.svg';
import { ReactComponent as PrevIcon } from 'assets/images/icon-previous.svg';
import { useEffect, useRef, useState } from 'react';

export const ImagesCarousel = ({ images, initialActiveImage, onScrollToItem = () => {} }) => {
  const [activeImage, setActiveImage] = useState(initialActiveImage?.id);
  const carouselRef = useRef();

  const findCarouselImage = (imageId) => {
    return [...carouselRef?.current.children].find(
      (child) => child.firstElementChild.getAttribute('data-image') === imageId
    );
  };

  const goNext = () => {
    const _activeImage = findCarouselImage(activeImage);
    const nextItem = _activeImage.nextElementSibling;
    if (nextItem) {
      scrollToItem(nextItem);
    }
  };

  const goPrevious = () => {
    const _activeImage = findCarouselImage(activeImage);
    const previousItem = _activeImage.previousElementSibling;
    if (previousItem) {
      scrollToItem(previousItem);
    }
  };

  const scrollToItem = (item) => {
    if (item) {
      carouselRef.current.scrollLeft = item.offsetLeft;
      const id = item.firstElementChild.getAttribute('data-image');
      setActiveImage(id);
      onScrollToItem(id);
    }
  };

  useEffect(() => {
    setActiveImage(initialActiveImage?.id);
    scrollToItem(carouselRef?.current.children[0]);

    // eslint-disable-next-line
  }, [initialActiveImage, carouselRef]);

  return (
    <StyledCarouselWrapper>
      <StyledCarouselContent ref={carouselRef}>
        {images &&
          images.map((image) => (
            <StyledCarouselItem key={image.id}>
              <img src={image.path} alt={image.id} data-image={image.id} />
            </StyledCarouselItem>
          ))}
      </StyledCarouselContent>
      <StyledCarouselNavigation>
        <StyledNavigationButton onClick={goPrevious}>
          <PrevIcon />
        </StyledNavigationButton>
        <StyledNavigationButton onClick={goNext}>
          <NextIcon />
        </StyledNavigationButton>
      </StyledCarouselNavigation>
    </StyledCarouselWrapper>
  );
};
