import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import CardComponent from "./CardComponent";
import Info from "./Info";
import { useSelector } from "react-redux";

// const Createcard = (val) => {
//   <CardComponent
//     key={val.id}
//     img={val.imgURL}
//     name={val.name}
//     price={val.price}
//     premium_price={val.premium_price}
//   />;
// };

export default function App() {

  const getData = useSelector((state) => state.cartreducer.cart);
  console.log(getData);


  return (
    <div>
      <div>

        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Category</Navbar.Brand>
            <Navbar.Brand href="#">Brand</Navbar.Brand>
            <Navbar.Brand href="#">Gender</Navbar.Brand>
            <Navbar.Brand href="#">Goal</Navbar.Brand>
            <Navbar.Brand href="#">Best sellers</Navbar.Brand>
            <Navbar.Brand href="#">Details</Navbar.Brand>
            <Navbar.Brand href="#">Gift Card</Navbar.Brand>
            <Navbar.Brand href="#">Blog,Videos&More</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div style={{ display: "block", width: 1500, padding: 30 }}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://img6.hkrtcdn.com/14609/bnr_1460845_o.png"
              alt="Image One"
            />

          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://img7.hkrtcdn.com/21460/bnr_2145916_o.jpg"
              alt="Image Two"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://img5.hkrtcdn.com/21102/bnr_2110134_o.jpg"
              alt="Image Three"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://img3.hkrtcdn.com/21464/bnr_2146322_o.jpg"
              alt="Image Four"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        {/* <div>
          <div className="cards">{Info.map(Createcard)}</div>
        </div> */}
        <CardComponent />


      </div>
    </div>
  );
}
