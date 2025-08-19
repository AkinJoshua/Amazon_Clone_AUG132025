import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  discountedPrice?: number | null;
  images?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  title?: string;
  titlePrice?: number;
  variants?: InputJsonValue;
};
