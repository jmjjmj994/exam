import { MapPin, star } from 'phosphor-react';
import { EmblaCarousel } from './EmblaCarousel';
import { useEffect, useState } from 'react';
import { checkUrlValid } from 'src/api/utilities/utilities';
import './product.css';
type ProductImageProps = {
  media: {
    url: string;
    alt: string;
  }[];
};

export const ProductImage: React.FC<ProductImageProps> = ({ media }) => {
  return (
    <div className="rounded-md bg-gray-50">
      {media && media.length > 2 && (
        <EmblaCarousel>
          {media.map((img, index) => (
            <img
              loading="lazy"
              className="embla_slide object-cover w-full  aspect-auto max-w-[800px] max-h-[470px] rounded-md  shadow-overlay "
              key={index}
              src={img.url}
              alt={`image of ${img} venue`}
            ></img>
          ))}
        </EmblaCarousel>
      )}

      {media && media.length > 1 && media.length <= 2 && (
        <div className="flex justify-between px-4 py-4">
          {media.map((img, index) => (
            <img
              loading="lazy"
              className="object-cover w-full  aspect-auto max-w-[800px] max-h-[500px] rounded-md bg-custom-background_white shadow-overlay p-1"
              key={index}
              src={img.url}
              alt={`image of ${img} venue`}
            ></img>
          ))}
        </div>
      )}

      {media && media.length === 1 && (
        <div className="flex items-center justify-center py-4">
          {' '}
          {media.map((img, index) => (
            <img
              loading="lazy"
              className="object-cover w-full  aspect-auto max-w-[800px] max-h-[500px] rounded-md bg-custom-background_white shadow-overlay p-1"
              key={index}
              src={img.url}
              alt={`image of ${img} venue`}
            ></img>
          ))}
        </div>
      )}
    </div>
  );
};
