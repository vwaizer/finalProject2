// import React from 'react';
// import { Carousel } from 'antd';
// const contentStyle = {
//   margin: 0,
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };
// const CarouselItem = () => {

//   return (
//     <Carousel autoplay>
//       <div>
//         <h3 style={contentStyle}>1</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>2</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>3</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>4</h3>
//       </div>
//     </Carousel>
//   );
// };
// export default CarouselItem;

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouseItem.css';
// import required modules
import { Navigation } from 'swiper/modules';

export default function CarouselItem(props) {
  const dataBase = props.data;
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        {dataBase.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.images[0]} alt="" style={{ height: '500px' }}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
