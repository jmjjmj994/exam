import React from 'react';
import { UpdateEmblaCarousel } from './UpdateCarousel';
import { WifiHigh, PawPrint, Pizza, Car } from 'phosphor-react';
import { ProductAmenities } from '../product/ProductAmenities';
type UpdatePreviewProps = {
  name: string;
  media: {
    url: string;
    alt: string;
  }[];
  wifi: boolean;
  pets: boolean;
  breakfast: boolean;
  parking: boolean;
  description: string;
  maxGuests: number;
};

export const UpdatePreview: React.FC<UpdatePreviewProps> = ({
  media,
  name,
  pets,
  wifi,
  parking,
  breakfast,
  maxGuests,
  description,
}) => {
  return (
    <article className="bg-orange-500 w-full">
      <UpdateEmblaCarousel>
        {media.map((img, index) => (
          <img
            loading="lazy"
            className="embla_slide object-cover w-full  aspect-auto max-w-[800px] max-h-[470px] rounded-md  shadow-overlay "
            key={index}
            src={img.url}
            alt={`image of ${img} venue`}
          ></img>
        ))}
      </UpdateEmblaCarousel>

      <div className="flex flex-col gap-1">
        <p className="inter-semi-bold">Amenities:</p>
        <div className="flex gap-4 text-sm">
          {!wifi && !parking && !pets && !breakfast && (
            <p>This venue does not offer any amenities.</p>
          )}

          {wifi && (
            <div>
              <WifiHigh size={25} />
              <p>Wifi access available</p>
            </div>
          )}
          {pets && (
            <div>
              <PawPrint size={25} />
              <p>Pets allowed</p>
            </div>
          )}
          {parking && (
            <div>
              <Pizza size={25} />
              <p>Breakfast included</p>
            </div>
          )}
          {breakfast && (
            <div>
              <Car size={25} />
              <p>Parking available</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
