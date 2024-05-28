import { useEffect, useState } from 'react';
import { checkUrlValid } from 'src/api/utilities/utilities';
import { EmblaCarousel } from './EmblaCarousel';
import styles from './styles.embla.module.css';

type ProductImageProps = {
  media: {
    url: string;
    alt: string;
  }[];
};

export const ProductImage: React.FC<ProductImageProps> = ({ media }) => {
  const [isValidUrls, setIsValidUrls] = useState<boolean[]>([]);
  useEffect(() => {
    const validateUrls = async () => {
      if (!media || media.length === 0) return;
      const urlValidity = await Promise.all(
        media.map(async (img) => {
          try {
            const isValid = await checkUrlValid(img.url);
            return isValid;
          } catch (error) {
            console.error('Error fetching URL:', error);
            return false;
          }
        })
      );
      setIsValidUrls(urlValidity);
    };
    validateUrls();
  }, [media]);
  console.log(media);
  const hasValidUrl = isValidUrls.some((isValid) => isValid);
  return (
    <div className="rounded-md bg-gray-100 my-4">
      {hasValidUrl && media.length > 2 && (
        <EmblaCarousel>
          {media.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt={img.alt}
              className={`${styles.embla_slide} object-cover w-full aspect-auto max-w-[800px] max-h-[470px] rounded-md shadow-overlay`}
            />
          ))}
        </EmblaCarousel>
      )}

      {media.length === 1 && hasValidUrl && (
        <>
          {media.map((img, index) => (
            <img
              className="object-cover w-full aspect-auto max-w-[800px] max-h-[470px] rounded-md shadow-overlay m-auto"
              key={index}
              src={img.url}
            ></img>
          ))}
        </>
      )}

      {!hasValidUrl && (
        <img
          src="/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.avif"
          alt="Default image"
          className="object-cover w-full aspect-auto max-w-[800px] max-h-[500px] rounded-md bg-custom-background_white shadow-overlay p-1 m-auto"
        />
      )}
    </div>
  );
};
