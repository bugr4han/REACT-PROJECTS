import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/ProductSlice";
import Product from "./Product";

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);
  console.log(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="products-grid">
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
