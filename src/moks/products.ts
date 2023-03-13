export interface IProduct {
  name: string;
  imageUrl: string;
  price: number;
}

export const mockProducts: IProduct[] = [
  {
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
  },
  {
    name: "White Gold Plated Princess",
    imageUrl:
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    price: 9.99,
  },
  {
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    imageUrl: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    price: 599,
  },
  {
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    imageUrl: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    price: 29.95,
  },
];
