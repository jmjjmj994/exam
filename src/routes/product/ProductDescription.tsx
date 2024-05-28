interface ProductDescriptionProps {
  description: string;
}
export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  return (
    <article className="text-base my-4">
      <h1 className="text-xl">Description</h1>
      <p>{description}</p>
    </article>
  );
};
