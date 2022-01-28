import {
  StyledCarouselItem,
  StyledCarouselNavigation,
  StyledCarouselContent,
  StyledNavigationButton,
  StyledCarouselWrapper,
} from './styles';
import { ReactComponent as NextIcon } from 'assets/images/icon-next.svg';
import { ReactComponent as PrevIcon } from 'assets/images/icon-previous.svg';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { debounce } from 'utils';

export const ImagesCarousel = forwardRef(
  (
    {
      images,
      initialActiveImage,
      hideInDesktop = false,
      containerHeight = '100%',
      containerWidth = '100%',
      carouselBorderRadius = '0',
      itemHeight = '100%',
      onScrollToItem = () => {},
    },
    ref
  ) => {
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
        onScrollToItem(id);
      }
    };

    const handleScroll = debounce((e) => {
      const { scrollWidth, scrollLeft, clientWidth } = e.target;
      const activeImageIndex = Math.ceil(((100 / scrollWidth) * (scrollLeft + clientWidth) * images.length) / 100);
      setActiveImage(`image-product-${activeImageIndex}`);
      onScrollToItem(`image-product-${activeImageIndex}`);
    }, 300);

    useImperativeHandle(ref, () => ({
      scrollToItem: (domItem) => scrollToItem(domItem),
      items: [...carouselRef.current.children],
    }));

    useEffect(() => {
      setActiveImage(initialActiveImage?.id);
      scrollToItem(carouselRef?.current.children[0]);

      // eslint-disable-next-line
    }, [initialActiveImage, carouselRef]);

    console.log({ activeImage });

    return (
      <StyledCarouselWrapper
        hideInDesktop={hideInDesktop}
        containerHeight={containerHeight}
        containerWidth={containerWidth}
      >
        <StyledCarouselContent ref={carouselRef} borderRadius={carouselBorderRadius} onScrollCapture={handleScroll}>
          {images &&
            images.map((image) => (
              <StyledCarouselItem key={image.id} height={itemHeight}>
                <img src={image.path} alt={image.id} data-image={image.id} />
              </StyledCarouselItem>
            ))}
        </StyledCarouselContent>
        <StyledCarouselNavigation>
          <StyledNavigationButton onClick={goPrevious} disabled={activeImage === 'image-product-1'}>
            <PrevIcon />
          </StyledNavigationButton>
          <StyledNavigationButton onClick={goNext} disabled={activeImage === `image-product-${images?.length}`}>
            <NextIcon />
          </StyledNavigationButton>
        </StyledCarouselNavigation>
      </StyledCarouselWrapper>
    );
  }
);
