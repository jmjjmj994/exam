import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';
import './product.css';
export const EmblaCarousel = ({ children }: { children: React.ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">{children}</div>
      <button
        className="embla__prev bg-gray-300 h-[2rem] w-[2rem] rounded-full"
        onClick={scrollPrev}
      >
        {' '}
        Prev{' '}
      </button>{' '}
      <button className="embla__next" onClick={scrollNext}>
        {' '}
        Next{' '}
      </button>
    </div>
  );
};
