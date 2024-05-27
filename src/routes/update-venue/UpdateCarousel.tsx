import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';
import styles from './styles.embla.module.css';
import { ArrowRight, ArrowLeft } from 'phosphor-react';
export const UpdateEmblaCarousel = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
    <div className={`${styles.embla}`} ref={emblaRef}>
      <div className={styles.embla__container}>{children}</div>
      <div className="flex gap-10 py-4 px-4 justify-between sm:justify-start">
        <button className={styles.embla__prev} onClick={scrollPrev}>
          <ArrowLeft size={25} />
        </button>{' '}
        <button className={styles.embla__next} onClick={scrollNext}>
          <ArrowRight size={25} />
        </button>
      </div>
    </div>
  );
};
