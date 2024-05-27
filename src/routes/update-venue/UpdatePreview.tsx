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
  media: {
    url: string;
    alt: string;
  }[];
};

export const UpdatePreview: React.FC<UpdatePreviewProps> = ({ media }) => {
  return (
    <UpdateEmblaCarousel>
      {media.map((img, index) => (
        <img
          loading="lazy"
          className={`${styles.embla_slide} cursor-grab  rounded-sm`}
          key={index}
          src={img.url}
          alt={`image of ${img} venue`}
        ></img>
      ))}
    </UpdateEmblaCarousel>
  );
};
