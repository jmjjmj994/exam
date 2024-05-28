interface ProductDescriptionProps {
  description: string;
}
export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  return (
    <article className="text-base">
      <h1 className="text-xl">About this venue</h1>
      <p>{description}</p>
    </article>
  );
};
