import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button
} from "@chakra-ui/react";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://northwind.vercel.app/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Quantity Per Unit</Th>
              <Th>Unit Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.id}>
                <Td>{product.id}</Td>
                <Td>{product.name} </Td>
                <Td>{product.quantityPerUnit}</Td>
                <Td>{product.unitPrice}</Td>
                <Td><Button color="teal">Delete</Button></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsTable;
