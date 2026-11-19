export default Student;
const ProductCard = ({ name, price, category, availability }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Category: {category}</p>
      <p>Availability: {availability}</p>
    </div>
  );
};

export default ProductCard;