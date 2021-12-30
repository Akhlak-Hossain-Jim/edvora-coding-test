import React, { useState } from "react";
import styled from "styled-components";

function Filter({ productData }) {
  const ProductData = productData;
  const [SelectedProduct, setSelectedProduct] = useState();

  const STATES = ProductData && [
    ...new Set(ProductData.map((e) => e.address.state)),
  ];

  return (
    <Container>
      <input type="text" name="Filter" id="" placeholder="Filters" />
      <select
        name="Products"
        id=""
        placeholder="Products"
        onChange={(e) => setSelectedProduct(e.target.value)}
      >
        <option value="">Products</option>
        {ProductData &&
          React.Children.toArray(
            [...new Set(ProductData.map((e) => e.product_name))].map((data) => (
              <option value={data}>{data}</option>
            ))
          )}
      </select>
      <select
        name="State"
        id=""
        placeholder="State"
        onChange={(e) => console.log(e.target.value)}
      >
        <option value="">State</option>
        {ProductData &&
          (SelectedProduct !== "" &&
          SelectedProduct !== null &&
          SelectedProduct !== undefined
            ? React.Children.toArray(
                [
                  ...new Set(
                    ProductData.filter(
                      (d) => d.product_name === SelectedProduct
                    ).map((e) => e.address.state)
                  ),
                ].map((data) => <option value={data}>{data}</option>)
              )
            : React.Children.toArray(
                STATES.map((data) => <option value={data}>{data}</option>)
              ))}
      </select>
      <select
        name="City"
        id=""
        placeholder="City"
        onChange={(e) => console.log(e.target.value)}
      >
        <option value="">City</option>
        {ProductData &&
          (SelectedProduct !== "" &&
          SelectedProduct !== null &&
          SelectedProduct !== undefined
            ? React.Children.toArray(
                [
                  ...new Set(
                    ProductData.filter(
                      (d) => d.product_name === SelectedProduct
                    ).map((e) => e.address.city)
                  ),
                ].map((data) => <option value={data}>{data}</option>)
              )
            : React.Children.toArray(
                [...new Set(ProductData.map((e) => e.address.city))].map(
                  (data) => <option value={data}>{data}</option>
                )
              ))}
      </select>
    </Container>
  );
}
const Container = styled.div`
  border-radius: var(--border-radius);
  background-color: var(--black);
  padding: 24px 34.55px 42.5px 25px;
  width: 228px;
  input {
    background: transparent;
    color: var(--white);
    font-size: 20px;
    border: none;
    outline: none;
    border-bottom: 1px solid hsla(0, 0%, 80%, 1);
    width: 100%;
    padding: 11px;
    margin-bottom: 35px;
    &::placeholder {
      color: var(--white);
      font-size: 20px;
    }
  }
  select {
    background: var(--lite-black);
    color: var(--white);
    border-radius: var(--border-radius-small);
    border: none;
    outline: none;
    padding: 8px 11.45px 7.5px 13px;
    width: 100%;
    margin-bottom: 12.5px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
export default Filter;
