import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { checkUrlValid } from 'src/api/utilities/utilities';
import { Star } from 'phosphor-react';
import { VenueType } from 'src/api/validation/venue-schema';

type VenueCardProps = Partial<VenueType>;
const renderImage = (imageUrl: string, name: string | undefined) => {
  return (
    <img
      loading="lazy"
      className="h-full w-full  aspect-square object-cover rounded-md"
      src={imageUrl}
      alt={`image of ${name}`}
    />
  );
};

export const VenuesCard: React.FC<VenueCardProps> = ({
  id,
  name,
  media,
  location,
  rating,
  price,
  owner,
}) => {
  const [isValidUrl, setIsValidUrl] = useState(true);
  useEffect(() => {
    const checkUrlValidity = async () => {
      if (!media || media.length === 0) return;
      const imageUrl = media[0].url;
      try {
        const isValid = await checkUrlValid(imageUrl);
        setIsValidUrl(isValid);
      } catch (error) {
        console.error('Error fetching URL:', error);
        setIsValidUrl(false);
      }
    };
    checkUrlValidity();
  }, [media]);

  return (
    <article key={id} className="flex flex-col relative rounded-md">
      <Link className="absolute w-full h-full" to={''}></Link>
      {isValidUrl
        ? media && media.length > 0
          ? renderImage(media[0].url, name)
          : renderImage(
              '/public/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.avif',
              `Placeholder for ${name}`
            )
        : renderImage(
            '/public/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.avif',
            `Placeholder for ${name}`
          )}

      <div className="min-h-[10vh]">
        <div className="flex justify-between items-center">
          {' '}
          <p className="inter-semi-bold">
            {location?.city ? location.city : 'No city provided'}, {''}
            {location?.country ? location.country : 'No location provided'}
          </p>
          <div className="flex items-center  gap-1">
            <Star />
            <p>{rating}</p>
          </div>
        </div>
        <div>
          <p className="inter-light">Host: {owner?.name}</p>
          <p className="inter-semi-bold"> ${price} night</p>
        </div>
      </div>
    </article>
  );
};
