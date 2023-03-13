import Product from "../../components/Product/Product";
import { IProduct, mockProducts } from "../../moks/products";

import style from "./products.module.scss";

const Products = () => {
  console.log('It_s called Products component')

  return (
    <div>
      List with products:
      <div className={style.productsContainer}>
        {mockProducts.map((product: IProduct) => {
          return <Product key={product.name} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
