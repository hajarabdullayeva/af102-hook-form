import * as yup from "yup";

export const ProductForm = yup.object().shape({
  name: yup.string().required("This field is required"),
  quantityPerUnit: yup.number().integer().required(),
  unitPrice: yup.number().positive().integer().required(),
  category: yup.string().required(),
  discontinued: yup.boolean()
});
