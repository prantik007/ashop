import oneplus from "../pictures/product-pictures/oneplus.jpg";
import fridge from "../pictures/product-pictures/fridge.jpg";
import laptop from "../pictures/product-pictures/laptop.jpg";
import mattress from "../pictures/product-pictures/mattress.jpg";
import micro from "../pictures/product-pictures/micro.jpg";
import thermostat from "../pictures/product-pictures/thermostat.jpg";

export const ProductList = [
  {
    id: Math.floor(Math.random() * 100000 + 1),
    name: "OnePlus Nord CE 2 5G (Bahamas Blue, 6GB RAM, 128GB Storage)",
    rating: 4,
    price: 600,
    imageURL: oneplus,
  },
  {
    id: Math.floor(Math.random() * 100000 + 1),
    name: "Samsung Large Capacity Countertop Microwave Oven",
    rating: 3,
    price: 169,
    imageURL: micro,
  },
  {
    id: Math.floor(Math.random() * 100000 + 1),
    name: "Acer Aspire 5 A515-46-R3UB | 15.6 Full HD IPS Display",
    rating: 4,
    price: 331.69,
    imageURL: laptop,
  },
  {
    id: Math.floor(Math.random() * 100000 + 1),
    name: "Google Nest Thermostat - Smart Thermostat for Home",
    rating: 5,
    price: 128,
    imageURL: thermostat,
  },
  {
    id: Math.floor(Math.random() * 100000 + 1),
    name: "Queen Memory Foam Mattress, Sweetnight 8 inch Mattress",
    rating: 3,
    price: 229,
    imageURL: mattress,
  },
  {
    id: Math.floor(Math.random() * 100000 + 1),
    name: "LG 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator",
    rating: 4,
    price: 450,
    imageURL: fridge,
  },
];
