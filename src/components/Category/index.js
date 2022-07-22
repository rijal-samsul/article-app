import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { dataCategory } from "../../dataDummy";

export default function Category() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={true}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {dataCategory.map((item) => (
          <SwiperSlide className="my-5">
              <div className="flex justify-center items-center">
                  <h2 className="absolute text-white font-bold text-[10px] md:text-lg">{item.name}</h2>
                  <img className="md:w-32 md:h-32 rounded-full" src={item.image} alt="" />
              </div>
          </SwiperSlide>
        ))}


        

      </Swiper>
    </>
  );
}
