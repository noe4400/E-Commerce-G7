import React, { useEffect } from "react";
import { Carousel, Container, Col, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import PaginationC from "../Pagination/PaginationC";
import CardP from "../ProductCard/CardP";
import SideBarFilter from "../SideBarFilter/SideBarFilter";

const Home = (props) => {
  const imgUrl = [
    "https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-StockCenter-Library/default/dw5ea30e6a/01sept/full1lotto.jpg?sw=1440&sfrm=png",
    "https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-StockCenter-Library/default/dwbd6473ec/01sept/full2futbol.jpg?sw=1440&sfrm=png",
    "https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-StockCenter-Library/default/dw3956c245/01sept/full3invierno.jpg?sw=1440&sfrm=png",
    "https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-StockCenter-Library/default/dw322c4343/01sept/full4nike.jpg?sw=1440&sfrm=png",
  ];
  return (
    <div>
      <Carousel variant="dark">
        {imgUrl.map((item, index) => (
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={item} alt={index} />
          </Carousel.Item>
        ))}
      </Carousel>

      <PaginationC />
      <Row className="mx-3">
        <Col lg="2" className="justify-content-center">
          <h4>Categorías:</h4>
          <SideBarFilter></SideBarFilter>
        </Col>
        <Col className="d-flex align-content-center flex-wrap justify-content-between">
          <CardP />
          <CardP />
          <CardP />
          <CardP />
          <CardP />
          <CardP />
          <CardP />
          <CardP />
          <CardP />
        </Col>
      </Row>

      <PaginationC />
      <Footer />
    </div>
  );
};

export default Home;