import { TextField } from "@mui/material";
import { useState } from "react";
import Product from "../../components/Product/Product";
import { IProduct, mockProducts } from "../../moks/products";

import style from "./products.module.scss";

const Products = () => {
  const [value, setValue] = useState("");

  const handleChangeInput = async (event: any) => {
    setValue(event.target.value);
  };

  console.log("It_s called Products component");

  return (
    <div>
      List with products:
      <div>
        <TextField
          id="search-bar"
          onInput={handleChangeInput}
          value={value}
          variant="outlined"
          placeholder="text field"
          size="small"
          // InputProps={{
          //   startAdornment: (
          //     <SearchOutlinedIcon
          //       color="disabled"
          //       style={{
          //         paddingRight: "4px",
          //         height: height ? height : "100%",
          //       }}
          //     />
          //   ),
          // }}
        />
      </div>
      <div className={style.productsContainer}>
        {mockProducts.map((product: IProduct) => {
          return <Product key={product.name} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
