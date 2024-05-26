type ProductOwnerProps = {
  avatar: {
    url: string;
    alt: string;
  };
  name: string;
};

export const ProductOwner: React.FC<ProductOwnerProps> = ({
  avatar: { url, alt },
  name,
}) => {
  return (
    <div className="flex gap-1">
      <div>
        <img
          className="w-[4rem] h-[4rem] object-cover aspect-square rounded-full"
          src={url}
          alt={alt}
        />
      </div>
      <p>{name}</p>
    </div>
  );
};
