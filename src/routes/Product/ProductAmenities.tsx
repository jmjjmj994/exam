import { WifiHigh, PawPrint, Pizza, Car } from 'phosphor-react';

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
  console.log(wifi, parking, pets, breakfast, 'Meta tags');
  return (
    <article className="bg-orange-200">
      <h1>Venue amenities</h1>

      {!wifi && !parking && !pets && !breakfast && (
        <p>This venue does not offer any amenities.</p>
      )}

      {wifi && (
        <div>
          <WifiHigh />
          <p className="inter-light text-xs">Wifi access available</p>
        </div>
      )}
      {pets && (
        <div>
          <PawPrint />
          <p className="inter-light text-md">Pets allowed</p>
        </div>
      )}
      {parking && (
        <div>
          <Pizza />
          <p className="inter-light text-md">Breakfast included</p>
        </div>
      )}
      {breakfast && (
        <div>
          <Car />
          <p className="inter-light text-md">On-site parking available</p>
        </div>
      )}
    </article>
  );
};
