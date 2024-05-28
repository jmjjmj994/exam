import { MapPin, Globe } from 'phosphor-react';


type ProductLocationProps = {
  location: {
    address: string | null;
    city: string | null;
    country: string | null;
  };
};

type PartialProductionLocationProps = Partial<ProductLocationProps>;

export const ProductLocation: React.FC<PartialProductionLocationProps> = ({
  location: { address, city, country } = {},
}) => (
  <article className="text-sm flex flex-col gap-2">
    <h3 className="text-base inter-semi-bold">Location of the venue</h3>
    <div className="flex gap-4">
      <div className="flex items-center flex-col">
        <MapPin size={25} />
        <p>{address}</p>
      </div>

      <div className="flex items-center flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M240,208h-8V88a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v40H104V40a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM168,96h48V208H168Zm-16,48v64H104V144ZM40,48H88V208H40ZM72,72V88a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm48,16V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm64,0V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm0-48V120a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Z"></path>
        </svg>
        <p>{city}</p>
      </div>

      <div className="flex items-center flex-col">
        <Globe size={25} />
        <p>{country}</p>
      </div>
    </div>
  </article>
);
