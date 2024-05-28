import { WifiHigh, PawPrint, Pizza, Car, XCircle } from 'phosphor-react';

type ProductAmenitiesProps = {
  meta: {
    wifi: boolean;
    parking: boolean;
    pets: boolean;
    breakfast: boolean;
  };
};

export const ProductAmenities: React.FC<ProductAmenitiesProps> = ({
  meta: { wifi, parking, pets, breakfast },
}) => {
  return (
    <article className=" text-sm flex flex-col gap-2">
      <h4 className="text-base inter-semi-bold">Venue amenities</h4>
      {!wifi && !parking && !pets && !breakfast && null}
      <div className="flex gap-4">
        {wifi && (
          <div className="flex items-center flex-col">
            <WifiHigh size={25} />
            <p>Wifi</p>
          </div>
        )}
        {pets && (
          <div className="flex items-center flex-col">
            <PawPrint size={25} />
            <p>Pets</p>
          </div>
        )}
        {parking && (
          <div className="flex items-center flex-col">
            <Pizza size={25} />
            <p>Breakfast</p>
          </div>
        )}
        {breakfast && (
          <div className="flex items-center flex-col">
            <Car size={25} />
            <p>Parking</p>
          </div>
        )}
      </div>
    </article>
  );
};
