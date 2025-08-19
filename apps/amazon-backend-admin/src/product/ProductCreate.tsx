import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { OrderTitle } from "../order/OrderTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <div />
        <div />
        <NumberInput label="DiscountedPrice" source="discountedPrice" />
        <div />
        <ReferenceInput source="order.id" reference="Order" label="Orders">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <NumberInput label="TitlePrice" source="titlePrice" />
        <div />
      </SimpleForm>
    </Create>
  );
};
