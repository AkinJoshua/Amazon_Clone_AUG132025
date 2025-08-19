import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";

export type Product = {
  category?: Category | null;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedPrice: number | null;
  id: string;
  images: JsonValue;
  order?: Order | null;
  title: string;
  titlePrice: number;
  updatedAt: Date;
  variants: JsonValue;
};
