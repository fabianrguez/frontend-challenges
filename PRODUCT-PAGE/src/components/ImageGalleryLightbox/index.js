import { ReactComponent as CloseIcon } from 'assets/images/icon-close.svg';
import { ImagesCarousel } from 'components/ImagesCarousel';
import { useEffect, useRef, useState } from 'react';
import {
  StyledLightboxCloseButton,
  StyledLightboxContent,
  StyledLightboxThumbnails,
  StyledLightboxThumbnailWrapper,
  StyledLightboxWrapper,
} from './styles';

export const ImageGalleryLightBox = ({ activeImage, images, thumbnails, isOpen, toggleLightbox }) => {
  const [active, setActive] = useState(activeImage);
  const carouselRef = useRef();

  const scrollToImage = (id) => {
    if (id) {
      const imageTo = [...carouselRef.current.items].find(
        (child) => child.firstElementChild.getAttribute('data-image') === id
      );
      carouselRef.current.scrollToItem(imageTo);
    }
  };

  const handleThumbnailClicked = (e) => {
    e.preventDefault();
    const { currentTarget } = e;
    const imageTarget = currentTarget.firstElementChild.getAttribute('data-image');
    scrollToImage(imageTarget);
  };

  const closeLightbox = (e) => {
    e.preventDefault();
    toggleLightbox();
  };

  const handleOnScrollToItem = (id) => {
    const _activeImage = images?.find((image) => image.id === id);
    setActive({ ..._activeImage });
  };

  useEffect(() => {
    if (activeImage) {
      scrollToImage(activeImage.id);
      setActive(activeImage);
    }
  }, [activeImage, isOpen]);

  return (
    <StyledLightboxWrapper isOpen={isOpen}>
      <StyledLightboxContent>
        <StyledLightboxCloseButton onClick={closeLightbox}>
          <CloseIcon />
        </StyledLightboxCloseButton>
        <ImagesCarousel
          ref={carouselRef}
          images={images}
          initialActiveImage={activeImage}
          containerHeight="32rem"
          containerWidth="32rem"
          carouselBorderRadius="12px"
          onScrollToItem={handleOnScrollToItem}
        />
        <StyledLightboxThumbnails>
          {thumbnails?.map((thumbnail) => (
            <StyledLightboxThumbnailWrapper
              key={thumbnail.id}
              isActive={thumbnail.id === active?.id}
              onClick={handleThumbnailClicked}
            >
              <img src={thumbnail.path} alt={thumbnail.id} data-image={thumbnail.id} />
            </StyledLightboxThumbnailWrapper>
          ))}
        </StyledLightboxThumbnails>
      </StyledLightboxContent>
    </StyledLightboxWrapper>
  );
};
