import { useEffect, useState } from 'react';
import { useAssetsImage } from './useAssetsImage';

export function useImagesGallery(images) {
  const assetsImages = useAssetsImage(images);
  const [activeImage, setActiveImage] = useState(null);
  const [isLightboxOpen, setIsLightBoxOpen] = useState(false);

  const changeActiveImage = (image) => {
    const active = assetsImages?.bigs.find(({ id }) => id === image);
    setActiveImage(active);
  };

  const toggleLightbox = () => setIsLightBoxOpen(!isLightboxOpen);

  useEffect(() => {
    assetsImages?.bigs && setActiveImage(assetsImages.bigs[0]);
  }, [assetsImages]);

  return {
    activeImage,
    thumbnails: assetsImages?.thumbnails,
    images: assetsImages?.bigs,
    isLightboxOpen,
    changeActiveImage,
    toggleLightbox,
  };
}
