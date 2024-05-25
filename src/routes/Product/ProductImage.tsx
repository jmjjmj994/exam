import { MapPin, star } from 'phosphor-react';
import { EmblaCarousel } from './EmblaCarousel';
import { useEffect, useState } from 'react';
import { checkUrlValid } from 'src/api/utilities/utilities';
import './product.css';
type ProductImageProps = {
  media:
    | {
        url: string;
        alt: string;
      }[];
};

export const ProductImage: React.FC<ProductImageProps> = ({ media }) => {
  return (
    <div className="rounded-md  bg-orange-50">
      {media && media.length > 1 ? (
        <div className="venue-2x2-grid bg-green-200">
          {media.map((img, index) => (
            <div className="bg-blue-500 py-4 w-full">
              <img
                className="object-cover w-full h-full aspect-auto"
                key={index}
                src={img.url}
                alt={`image of ${img} venue`}
              ></img>
            </div>
          ))}
        </div>
      ) : (
        /*   <EmblaCarousel>
          {media.map((img, index) => (
            <img
              className="embla_slide"
              key={index}
              src={img.url}
              alt={`image of ${img} venue`}
            ></img>
          ))}
        </EmblaCarousel> */
        <div className="container_bg py-4 px-4 rounded-md">
          <img
            className=" max-h-[600px] m-auto  object-contain aspect-auto rounded-md "
            src={media?.[0]?.url ?? ''}
            alt={`image of ${media?.[0]?.url} venue`}
          ></img>
        </div>
      )}
    </div>
  );
};
