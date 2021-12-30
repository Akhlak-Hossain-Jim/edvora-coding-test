import React from "react";
import styled from "styled-components";

function Product({
  Image = "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png",
  Location = "Location",
  ProductName = "Product Name",
  ProductBrand = "Product Brand",
  Price = "Price",
  ProductDate = "",
  ProductDescription = "Product Description",
}) {
  return (
    <Container>
      <div className="product__line_1">
        <div className="product__line_1__left">
          <img src={Image} alt="" className="product__Img" />
          <div className="product__location">{Location}</div>
        </div>
        <div className="product__line_1__right">
          <div className="product__name">{ProductName}</div>
          <div className="product__brand">{ProductBrand}</div>
          <div className="product__price">$ {Price}</div>
          <div className="product__date">
            <span>Date: {ProductDate}</span>
          </div>
        </div>
      </div>
      <div className="product__description">{ProductDescription} </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px 15px 14px 12px;
  background: var(--lite-black);
  width: 210px;
  height: 100%;
  border-radius: var(--border-radius-small);
  @media (max-width: 548px) {
    width: 100%;
  }
  .product {
    &__line_1 {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 20px;
      &__right {
      }
    }
    &__Img {
      height: 70px;
      width: 70px;
      border-radius: 5px;
      background: var(--white);
    }
    &__name {
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 18px;
      color: var(--white);
      margin-bottom: 10px;
    }
    &__brand,
    &__location,
    &__date {
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 16px;
      color: var(--lite-white);
      margin-top: 10px;
    }
    &__brand {
      margin-top: 0;
    }
    &__date {
      span {
        font-size: 11px;
        line-height: 13px;
      }
    }
    &__price {
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 16px;
      color: var(--white);
      margin-top: 10px;
    }
    &__description {
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 13px;
      color: var(--lite-white);
      margin-top: 10px;
    }
  }
`;

export default Product;
