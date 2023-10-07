import { Swiper, SwiperSlide } from "swiper/react";
import "./catagory.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from './../../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
      <section>
        <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide><img src={slide1} alt="" />
          <h3 className="text-3xl font-thin uppercase text-center -mt-16 text-white">salads</h3>
          </SwiperSlide>
          <SwiperSlide><img src={slide2} alt="" />
          <h3 className="text-3xl font-thin uppercase text-center -mt-16 text-white">pizzas</h3>
          </SwiperSlide>
          <SwiperSlide><img src={slide3} alt="" />
          <h3 className="text-3xl font-thin uppercase text-center -mt-16 text-white">soups</h3>
          </SwiperSlide>
          <SwiperSlide><img src={slide4} alt="" />
          <h3 className="text-3xl font-thin uppercase text-center -mt-16 text-white">deserts</h3>
          </SwiperSlide>
          <SwiperSlide><img src={slide5} alt="" />
          <h3 className="text-3xl font-thin uppercase text-center -mt-16 text-white">salads</h3>
          </SwiperSlide>
        </Swiper>
        <div className="my-8 p-20 description bg-fixed">
          <div className="bg-white text-center p-16">
            <h2 className="text-4xl uppercase mb-3">Bistro Boss</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sapiente? Eum, dicta. Temporibus saepe repellendus velit neque molestiae distinctio illum cum incidunt vero? Maxime facilis, odit fuga numquam doloribus totam quis iusto. Laudantium aspernatur voluptatum excepturi, aliquam tempore, eos eum reprehenderit delectus ea maxime facere voluptas voluptates expedita. Consequatur, nobis.</p>
          </div>
        </div>
      </section>
  );
};

export default Category;
