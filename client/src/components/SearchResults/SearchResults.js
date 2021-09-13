import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../actions/ProductActions";
import { Row, Col } from "react-bootstrap";
import SideBarFilter from "../SideBarFilter/SideBarFilter";
import PaginationC from "../Pagination/PaginationC";
import CardP from "../ProductCard/CardP";

const SearchResults = () => {
  const { name = "all" } = useParams();
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  const { loading, error, products } = productsState;
  const productCategories = useSelector((state) => state.productCategories);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategories;

  useEffect(() => {
    let param = name !== "all" ? name : "";
    dispatch(getProducts(param));
  }, [dispatch, name]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {loading ? (
        <h1>Loading..</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <PaginationC total={products.total} />
          <Row className="mx-3">
            <Col lg="2">
              {loadingCategories ? (
                <h1>Loading..</h1>
              ) : errorCategories ? (
                <h1>{errorCategories}</h1>
              ) : (
                <SideBarFilter />
              )}
            </Col>
            <Col>
              <Row>
                <h1>{products.length}Resultados</h1>
              </Row>
              <Row className="d-flex align-content-center flex-wrap justify-content-between">
                {products.allClothes?.map((product) => (
                  <CardP
                    name={product.name}
                    price={product.price}
                    picture={product.media[0].name}
                  />
                ))}
              </Row>
            </Col>
          </Row>
          <PaginationC total={products.total} />
        </>
      )}
    </div>
  );
};

export default SearchResults;
