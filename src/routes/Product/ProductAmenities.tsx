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
    <article className="bg-orange-200 text-sm">
      <h4 className="text-xl">Venue amenities</h4>

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
          <p>On-site parking available</p>
        </div>
      )}
    </article>
  );
};
