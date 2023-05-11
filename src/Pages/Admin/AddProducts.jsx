import React, { useEffect, useState } from "react";
import {
  Input,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  Checkbox,
  Button,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductForm } from "../../schema/ProductForm";

const AddProducts = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const res = await axios.get("https://northwind.vercel.app/api/categories");
    setCategories(res.data);
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductForm),
  });

  useEffect(() => {
    getCategories();
  }, []);

  const onSubmit = async () => {
    const values = getValues();
    await axios.post("https://northwind.vercel.app/api/products", {
      name: values.name,
      discontinued: values.discontinued,
      quantityPerUnit: values.quantityPerUnit,
      unitPrice: values.unitPrice,
      category: values.category
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl maxW="sm" margin="10">
        <FormLabel>Name</FormLabel>
        <Input {...register("name")} maxW="sm" color="teal" />
        {errors.name ? (
          <p style={{ color: "red" }}>{errors?.name.message}</p>
        ) : (
          <></>
        )}

        <FormLabel>Quantity Per Unit</FormLabel>
        <NumberInput>
          <NumberInputField {...register("quantityPerUnit")} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {errors.quantityPerUnit ? (
          <p style={{ color: "red" }}>{errors?.quantityPerUnit.message}</p>
        ) : (
          <></>
        )}

        <FormLabel>Unit Price</FormLabel>
        <NumberInput>
          <NumberInputField {...register("unitPrice")} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {errors.unitPrice ? (
          <p style={{ color: "red" }}>{errors?.unitPrice.message}</p>
        ) : (
          <></>
        )}

        <FormLabel>Categories</FormLabel>
        <Select placeholder="Select option" {...register("category")}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
        {errors.category ? (
          <p style={{ color: "red" }}>{errors?.category.message}</p>
        ) : (
          <></>
        )}

        <Checkbox
          iconColor="teal.400"
          iconSize="1rem"
          {...register("discontinued")}
        >
          Discount
        </Checkbox>

        <Button marginTop="50" color="teal" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default AddProducts;
