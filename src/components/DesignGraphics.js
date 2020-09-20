import React from "react"
import tabStyles from "./Tab.module.css"
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import ImageSlide from "./ImageSlide"

class MusicContemporary extends React.Component {

  constructor(props) {
    super(props)
  }

  images() {
    return (
      <div>
        <Swiper
          effect={"coverflow"}
          slidesPerView={'auto'}
          centeredSlides={'center'}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          preloadImages={"false"}>
          {
            this.props.images.map((image) => (
              <SwiperSlide style={{
                width: "60%",
                height: "25%",
                // backgroundColor: "#ededed",
                borderRadius: "20px",
                // boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)"
                }} >
                <ImageSlide image={image} />
              </SwiperSlide>
            ))
          }
        </Swiper>

      </div >
    );

  }
  render() {
    const element = (this.props.section === "desc") ? this.description() : this.images()
    return (
      element
    )
  }

}

export default MusicContemporary