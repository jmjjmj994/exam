import { MapPin, star } from 'phosphor-react';

type ProductImageProps = {
  media:
    | {
        url: string;
        alt: string;
      }[]
    | {
        url: string;
        alt: string;
      };
};

export const ProductImage: React.FC<ProductImageProps> = ({ media }) => {
  console.log(media);

  return <div>hei</div>;
};
