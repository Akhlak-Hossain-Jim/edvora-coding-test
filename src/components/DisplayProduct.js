import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import Product from "./Product";

function DisplayProduct({ brandName = "Brand Name", products }) {
  return (
    <Container>
      <h3 className="title">{brandName}</h3>
      <div className="products_container">
        <Splide
          options={{
            type: "slide",
            perPage: 4,
            perMove: 1,
            rewind: false,
            speed: 200,
            gap: "20px",
            arrows: true,
            pagination: false,
            autoplay: false,
            breakpoints: {
              1023: {
                perPage: 3,
              },
              769: {
                perPage: 2,
              },
              549: {
                perPage: 1,
              },
            },
          }}
        >
          {products &&
            React.Children.toArray(
              products
                .filter((d) => d.brand_name === brandName)
                .map((data) => (
                  <SplideSlide>
                    <Product
                      Image={data.image}
                      Location={`${data.address.city}, ${data.address.state}`}
                      ProductName={data.product_name}
                      ProductBrand={data.brand_name}
                      Price={data.price}
                      ProductDate={data.date.substring(0, 10)}
                      ProductDescription={data.discription}
                    />
                  </SplideSlide>
                ))
            )}
        </Splide>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 21px;
  width: 100%;
  h3.title {
    color: var(--white);
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    border-bottom: 1px solid hsla(0, 0%, 80%, 0.5);
    padding-bottom: 4px;
    width: 96%;
  }
  .products_container {
    margin-top: 12px;
    background: #131313;
    border-radius: 15px;
    padding: 21px 44px 19px 20px;
    max-width: 984px;
    @media (max-width: 768px) {
      width: 95%;
    }
    @media (max-width: 548px) {
      width: 100%;
    }
    button.splide__arrow.splide__arrow--prev {
      display: none;
    }

    button.splide__arrow.splide__arrow--next {
      background: transparent;
      /* position: relative; */
      /* color: var(--white); */
      font-size: 20px;
      svg {
        fill: var(--white);
        position: absolute;
        top: 0;
        left: 110px;
        z-index: 100;
        @media (max-width: 548px) {
          left: 70px;
        }
      }
    }
    /* width: 100%; */
  }
`;

export default DisplayProduct;
