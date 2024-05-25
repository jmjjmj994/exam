import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { checkUrlValid } from 'src/api/utilities/utilities';
export const VenuesCard = ({
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
    <article className="flex flex-col relative">
      <Link className="absolute w-full h-full" to={''}></Link>
      {isValidUrl ? (
        media && media.length > 0 ? (
          <img
            loading="lazy"
            className="h-full w-full  aspect-square object-cover rounded-md"
            src={media[0].url}
            alt={`image of ${name}`}
          />
        ) : (
          <img
            loading="lazy"
            className="h-full  w-full aspect-square object-cover"
            src="src/assets/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.avif"
            alt={`Placeholder for ${name}`}
          />
        )
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <p className="text-red-500">Image not available</p>
        </div>
      )}
    </article>
  );
};
/* import star from 'src/assets/star-svgrepo-com(1).svg';
import { Link } from 'react-router-dom';
import { VenueObjectProps } from 'src/api/configs/types/apiTypes';
type VenueCardProps = Partial<VenueObjectProps>;

export const VenueCard: React.FC<VenueCardProps> = ({
  id,
  name,
  media,
  location,
  rating,
  price,
  owner,
}) => {
  return (
    <article className="flex flex-col  relative rounded-md">
      <Link
        to={`/venue/${id}`}
        target="_blank"
        className=" absolute w-full h-full"
      >
        {' '}
      </Link>
      {media && media.length > 0 ? (
        <img
          loading="lazy"
          className="h-full w-full  aspect-square object-cover rounded-md"
          src={media[0].url}
          alt={`image of ${name}`}
        />
      ) : (
        <img
          loading="lazy"
          className="h-full  w-full aspect-square object-cover"
          src="src/assets/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.avif"
          alt={`Placeholder for ${name}`}
        />
      )}

      <div className="min-h-[10vh]">
        <div className="flex justify-between items-center">
          {' '}
          <p className="font-int-bold">
            {location?.city ? location.city : 'No city provided'}, {''}
            {location?.country ? location.country : 'No location provided'}
          </p>
          <div className="flex items-center  gap-1">
            {rating !== undefined && rating > 0 && (
              <>
                <img
                  className="max-w-[0.9rem] h-[0.9rem]"
                  src={star}
                  alt="star"
                />
                <p>{rating}</p>
              </>
            )}
          </div>
        </div>
        <div>
          <p className="font-int-light">Host: {owner?.name}</p>
          <p className="font-int-bold"> ${price} night</p>
        </div>
      </div>
    </article>
  );
};
 */
