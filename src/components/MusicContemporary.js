import React from "react"
import tabStyles from "./Tab.module.css"
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import VideoSlide from "./VideoSlide"

class MusicContemporary extends React.Component {

  constructor(props) {
    super(props)
  }

  description() {
    return (
      <div>
        <p className={tabStyles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    );
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
            this.props.songs.map((song) => (
              <SwiperSlide style={{
                width: "450px",
                height: "350px",
                backgroundColor: "#ededed",
                borderRadius: "20px",
                boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)"
                }}>
                <VideoSlide song={song} />
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