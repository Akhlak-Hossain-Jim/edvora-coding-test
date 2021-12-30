import React, { useEffect, useState } from "react";
import DisplayProduct from "./components/DisplayProduct";
import Filter from "./components/Filter";
import { AppContainer } from "./styles/appStyle";

function App() {
  const [ProductData, setProductData] = useState();
  const [toggler, setToggler] = useState();

  useEffect(() => {
    fetch("https://assessment-edvora.herokuapp.com")
      .then((res) => res.json())
      .then((res) => setProductData(res))
      .catch((error) => window.alert(error));
  }, []);

  let COMPANIES = ProductData && ProductData.map((d) => d.brand_name);
  let UNIQ = [...new Set(COMPANIES)];

  return (
    <>
      <AppContainer>
        <div className="container">
          <div className="container__left">
            <div
              className={`phone__nav__icon `}
              onClick={() => setToggler(!toggler)}
              tabIndex="0"
            >
              <div className={toggler ? "hamInner active" : "hamInner"}></div>
            </div>
            <div
              className={`container__left_filter__container ${
                toggler ? "active" : ""
              }`}
            >
              <Filter productData={ProductData} />
            </div>
          </div>
          <div className="container__right">
            <h1 className="title">Edvora</h1>
            <h2 className="subTitle">Products</h2>
            {ProductData &&
              React.Children.toArray(
                UNIQ.map((data) => (
                  <DisplayProduct brandName={data} products={ProductData} />
                ))
              )}
          </div>
        </div>
      </AppContainer>
    </>
  );
}

export default App;
