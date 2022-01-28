import { ReactComponent as CloseIcon } from 'assets/images/icon-close.svg';
import { ReactComponent as NextIcon } from 'assets/images/icon-next.svg';
import { ReactComponent as PrevIcon } from 'assets/images/icon-previous.svg';
import { useEffect, useRef, useState } from 'react';
import {
  StyledLightboxButtonNext,
  StyledLightboxButtonPrev,
  StyledLightboxCarousel,
  StyledLightboxCloseButton,
  StyledLightboxContent,
  StyledLightboxImage,
  StyledLightboxImages,
  StyledLightboxThumbnails,
  StyledLightboxThumbnailWrapper,
  StyledLightboxWrapper,
} from './styles';

export const ImageGalleryLightBox = ({ activeImage, images, thumbnails, isOpen, toggleLightbox }) => {
  const [active, setActive] = useState(activeImage);
  const imagesRef = useRef();

  const scrollToImage = (id) => {
    if (id) {
      const imageTo = [...imagesRef?.current.children].find((child) => child.getAttribute('data-image') === id);
      imagesRef.current.scrollLeft = imageTo.offsetLeft;
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

  const handleScroll = (e) => {
    const { scrollWidth, scrollLeft, clientWidth } = e.target;
    const activeThumbnail = Math.floor(((100 / scrollWidth) * (scrollLeft + clientWidth) * images.length) / 100);
    setActive(images[activeThumbnail - 1]);
  };

  const goNext = () => {
    const activeImageIndex = images?.findIndex((image) => image.id === active.id);
    if (activeImageIndex < images?.length - 1) {
      scrollToImage(images[activeImageIndex + 1].id);
    }
  };
  const goPrev = () => {
    const activeImageIndex = images?.findIndex((image) => image.id === active.id);
    if (activeImageIndex > 0) {
      scrollToImage(images[activeImageIndex - 1].id);
    }
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
        <StyledLightboxCarousel>
          <StyledLightboxImages ref={imagesRef} onScrollCapture={handleScroll}>
            {images?.map((image) => (
              <StyledLightboxImage key={image.id} src={image.path} alt={image.id} data-image={image.id} />
            ))}
          </StyledLightboxImages>
          <StyledLightboxButtonPrev onClick={goPrev}>
            <PrevIcon />
          </StyledLightboxButtonPrev>
          <StyledLightboxButtonNext onClick={goNext}>
            <NextIcon />
          </StyledLightboxButtonNext>
        </StyledLightboxCarousel>
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
