import React from 'react';
import { UpdateEmblaCarousel } from './UpdateCarousel';
import {
  WifiHigh,
  PawPrint,
  Pizza,
  Car,
  UsersThree,
  Info,
} from 'phosphor-react';
import styles from './styles.embla.module.css';
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
    <article className=" w-full bg-custom-background_white shadow-overlay rounded-sm hidden lg:block">
      <UpdateEmblaCarousel>
        {media.map((img, index) => (
          <img
            loading="lazy"
            className={`${styles.embla_slide} cursor-grab`}
            key={index}
            src={img.url}
            alt={`image of ${img} venue`}
          ></img>
        ))}
      </UpdateEmblaCarousel>

      <div className="flex flex-col gap-4 my-4">
        <div className="flex flex-col gap-1">
          <p className="inter-semi-bold text-xl"> Venue name</p>
          {name}
        </div>

        <div className="flex gap-1 text-sm  flex-col">
          <p className="inter-semi-bold text-xl">Amenities</p>
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

        <div className="flex flex-col gap-1">
          <p className="inter-semi-bold text-xl">Guests</p>
          <UsersThree size={25} />
          <p>Number of guests: {maxGuests}</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="inter-semi-bold text-xl">Description</p>
          <Info size={25} />
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};
