import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Colors" source="colors" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="DiscountedPrice" source="discountedPrice" />
        <TextField label="ID" source="id" />
        <TextField label="Images" source="images" />
        <ReferenceField label="Orders" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <TextField label="TitlePrice" source="titlePrice" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Variants" source="variants" />
      </SimpleShowLayout>
    </Show>
  );
};
