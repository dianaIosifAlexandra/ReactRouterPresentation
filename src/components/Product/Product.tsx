import style from "./product.module.scss";
import { IProduct } from "../../moks/products";

interface Props {
  product: IProduct;
}

const Product = ({ product }: Props) => {
  // console.log('It_s called Product component');

  return (
    <div className={style.productContainer}>
      <div className={style.paper}>
        <div className={style.imgContainer}>
          <img className={style.productImage} src={product.imageUrl} alt="" />
        </div>
        <div>{product.name}</div>

        <div className={style.ratingContainer}>{product.price}$</div>
      </div>
    </div>
  );
};

export default Product;
