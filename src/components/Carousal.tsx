// import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "./carousel.css";
import img1 from '../assets/Black glass perfume bottle and pink ribbon -20.jpg'
import img2 from '../assets/Luxury perfume bottle -12.jpg'
import img3 from '../assets/Luxury perfume bottle -6.jpg'
import img4 from '../assets/1226.jpg'
import img5 from '../assets/purple.jpg'
import img6 from '../assets/green.jpg'
// import {CustomLeftArrow,CustomRightArrow} from "./Customarrow";

export default function Carousal() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  // const productData = [{},{},{}]
  // const product = productData.map(item =>(
  //     <Product name={item.name} url={item.url} price={item.price} description={item.description}/>
  // ))

  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        arrows={true}
        // customLeftArrow={<CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        {/* {product} */}
        <div>
          <div className="new_products_one">
            <img src={img1} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error dolore consectetur eos deserunt accusamus voluptatem ex, est vero eum explicabo voluptatum dolorem velit quasi, illo autem odit asperiores quam quos. Aperiam praesentium voluptates ullam aliquid vero quibusdam minima qui molestiae perferendis dicta, eum earum fugiat!</p>
          </div>
        </div>

        <div>
          <div className="new_products_two">
            <img src={img2} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error dolore consectetur eos deserunt accusamus voluptatem ex, est vero eum explicabo voluptatum dolorem velit quasi, illo autem odit asperiores quam quos. Aperiam praesentium voluptates ullam aliquid vero quibusdam minima qui molestiae perferendis dicta, eum earum fugiat!</p>
          </div>
        </div>

        <div>
          <div className="new_products_one">
            <img src={img3} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error dolore consectetur eos deserunt accusamus voluptatem ex, est vero eum explicabo voluptatum dolorem velit quasi, illo autem odit asperiores quam quos. Aperiam praesentium voluptates ullam aliquid vero quibusdam minima qui molestiae perferendis dicta, eum earum fugiat!</p>
          </div>
        </div>

        <div>
          <div className="new_products_two">
            <img src={img4} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error dolore consectetur eos deserunt accusamus voluptatem ex, est vero eum explicabo voluptatum dolorem velit quasi, illo autem odit asperiores quam quos. Aperiam praesentium voluptates ullam aliquid vero quibusdam minima qui molestiae perferendis dicta, eum earum fugiat!</p>
          </div>
        </div>

        <div>
          <div className="new_products_one">
            <img src={img5} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error dolore consectetur eos deserunt accusamus voluptatem ex, est vero eum explicabo voluptatum dolorem velit quasi, illo autem odit asperiores quam quos. Aperiam praesentium voluptates ullam aliquid vero quibusdam minima qui molestiae perferendis dicta, eum earum fugiat!</p>
          </div>
        </div>

        <div>
          <div className="new_products_two">
            <img src={img6} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error dolore consectetur eos deserunt accusamus voluptatem ex, est vero eum explicabo voluptatum dolorem velit quasi, illo autem odit asperiores quam quos. Aperiam praesentium voluptates ullam aliquid vero quibusdam minima qui molestiae perferendis dicta, eum earum fugiat!</p>
          </div>
        </div>

        <div>
          <div className="new_products_one">
            <img src={img4} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error dolore consectetur eos deserunt accusamus voluptatem ex, est vero eum explicabo voluptatum dolorem velit quasi, illo autem odit asperiores quam quos. Aperiam praesentium voluptates ullam aliquid vero quibusdam minima qui molestiae perferendis dicta, eum earum fugiat!</p>
          </div>
        </div>

        <div>
          <div className="new_products_two">
            <img src={img5} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error dolore consectetur eos deserunt accusamus voluptatem ex, est vero eum explicabo voluptatum dolorem velit quasi, illo autem odit asperiores quam quos. Aperiam praesentium voluptates ullam aliquid vero quibusdam minima qui molestiae perferendis dicta, eum earum fugiat!</p>
          </div>
        </div>
      </Carousel>

    </>
  );
}