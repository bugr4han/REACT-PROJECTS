import React from "react";
import { useParams } from "react-router-dom";
import { ourProducts } from "../Datas/ourProducts";
import Product from "../Components/Product";

function ProductDetails() {
  const wantedID = useParams().id;
  //VEYA const { id } = useParams();
  return (
    <div>
      <h1 style={{ margin: "15px" }}>Ürün Detayları</h1>
      <hr />
      {ourProducts &&
        ourProducts.map((product) => {
          if (product.id == wantedID) {
            return <Product key={product.id} product={product} />;
          }
        })}
    </div>
  );
}

export default ProductDetails;
