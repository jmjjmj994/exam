interface ProductDescriptionProps {
  description: string;
}
export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  return (
    <article>
      <h1>About this venue</h1>
      <p>{description}</p>
    </article>
  );
};
