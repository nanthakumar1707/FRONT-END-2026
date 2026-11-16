import ProductCard from "./ProductCard";

function ProductList(props) {
  return (
    <div>
      {props.products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;