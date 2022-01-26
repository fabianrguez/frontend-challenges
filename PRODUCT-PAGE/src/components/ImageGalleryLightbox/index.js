import { ReactComponent as CloseIcon } from 'assets/images/icon-close.svg';
import { useEffect, useRef, useState } from 'react';
import {
  StyledLightboxCloseButton,
  StyledLightboxContent,
  StyledLightboxImage,
  StyledLightboxImages,
  StyledLightboxThumbnails,
  StyledLightboxThumbnailWrapper,
  StyledLightboxWrapper,
} from './styles';

export const ImageGalleryLightBox = ({ activeImage, images, thumbnails, isOpen, toggleLightbox }) => {
  const imagesRef = useRef();
  const [active, setActive] = useState(activeImage);

  const handleThumbnailClicked = (e) => {
    e.preventDefault();
    const { currentTarget } = e;
    const imageTarget = currentTarget.firstElementChild.getAttribute('data-image');
    const imageTo = [...imagesRef?.current.children].find((child) => child.getAttribute('data-image') === imageTarget);

    imagesRef.current.scrollLeft = imageTo.offsetLeft - imageTo.width;
    setActive({
      path: imageTarget.src,
      id: imageTarget,
    });
  };

  const closeLightbox = (e) => {
    e.preventDefault();
    toggleLightbox();
  };

  useEffect(() => {
    setActive(activeImage);
  }, [activeImage]);

  return (
    <StyledLightboxWrapper isOpen={isOpen}>
      <StyledLightboxContent>
        <StyledLightboxCloseButton onClick={closeLightbox}>
          <CloseIcon />
        </StyledLightboxCloseButton>
        <StyledLightboxImages ref={imagesRef}>
          {images?.map((image) => (
            <StyledLightboxImage key={image.id} src={image.path} alt={image.id} data-image={image.id} />
          ))}
        </StyledLightboxImages>
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
