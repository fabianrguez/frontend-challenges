import { useEffect, useState } from 'react';
import { loadImage } from 'utils';

export function useAssetsImage(images = {}) {
  const [assetsImages, setAssetsImages] = useState({});

  useEffect(() => {
    const assetsImages = Object.entries(images)?.reduce((acc, [key, data]) => {
      const images = data.map((image, index) => ({
        path: loadImage(image),
        id: image.replace('-thumbnail', '').replace('.jpg', ''),
        index: index + 1,
      }));
      return { ...acc, [key]: images };
    }, {});
    setAssetsImages(assetsImages);
  }, [images]);

  return assetsImages;
}
