import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import ImageSlide from "./ImageSlide"

class MusicContemporary extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

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
          grabCursor={"true"}
          preloadImages={"false"}>
          {
            this.props.images.map((image) => (
              <SwiperSlide style={{
                height: "25%",
                borderRadius: "20px",
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