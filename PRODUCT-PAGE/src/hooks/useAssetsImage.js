import { useEffect, useState } from 'react';

export function useAssetsImage(images = {}) {
  const [assetsImages, setAssetsImages] = useState({});

  useEffect(() => {
    const assetsImages = Object.entries(images)?.reduce((acc, [key, data]) => {
      const images = data.map((image) => ({
        path: require(`assets/images/${image}`),
        id: image.replace('-thumbnail', '').replace('.jpg', ''),
      }));
      return { ...acc, [key]: images };
    }, {});
    setAssetsImages(assetsImages);
  }, [images]);

  return assetsImages;
}
