import { ImageGalleryLightBox } from 'components/ImageGalleryLightbox';
import { useImagesGallery } from 'hooks/useImageGallery';
import { ImagesCarousel } from '../ImagesCarousel';
import {
  StyledBigImageWrapper,
  StyledImageGalleryWrapper,
  StyledThumbnails,
  StyledThumbnailWrapper,
  StyledImageGalleryContainer,
} from './styles';

export const ImageGallery = ({ images }) => {
  const {
    activeImage,
    images: bigImages,
    thumbnails,
    isLightboxOpen,
    changeActiveImage,
    toggleLightbox,
  } = useImagesGallery(images);

  const handleChangeImage = (image) => () => changeActiveImage(image);

  return (
    <StyledImageGalleryContainer>
      <StyledImageGalleryWrapper>
        <StyledBigImageWrapper onClick={toggleLightbox}>
          <img src={activeImage?.path} alt="" />
        </StyledBigImageWrapper>
        <StyledThumbnails>
          {thumbnails?.map(({ path, id }) => (
            <StyledThumbnailWrapper key={id} isActive={activeImage?.id === id} onClick={handleChangeImage(id)}>
              <img src={path} alt={id} />
            </StyledThumbnailWrapper>
          ))}
        </StyledThumbnails>
        <ImageGalleryLightBox
          activeImage={activeImage}
          images={bigImages}
          thumbnails={thumbnails}
          isOpen={isLightboxOpen}
          toggleLightbox={toggleLightbox}
        />
      </StyledImageGalleryWrapper>
      <ImagesCarousel images={bigImages} initialActiveImage={activeImage} hideInDesktop itemHeight="22rem" />
    </StyledImageGalleryContainer>
  );
};
