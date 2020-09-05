import React from "react"
import tabStyles from "./Tab.module.css"
import "./Player.css"
import * as  Amplitude from "amplitudejs"

import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import "./Music.css"

SwiperCore.use([EffectCoverflow, Pagination]);

class MusicOriginal extends React.Component {

  constructor(props) {
    super(props)
    this.myRefs = props.songs.map(() => React.createRef())

  }

  description() {
    return (
      <div>
        <p className={tabStyles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    );
  }

  componentDidMount() {
    Amplitude.init({ "songs": this.props.songs })
  }

  onClickProgress(e, currentIndex, ref) {
    if (Amplitude.getActiveIndex() === currentIndex) {
      var offset = ref.current.getBoundingClientRect();
      var x = e.pageX - offset.left;
      Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(ref.current.offsetWidth)) * 100);
    }
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
            this.props.songs.map((song, index) => (
              <SwiperSlide>
                <div className="player">
                  <img src={song["cover_art_url"]} className="album-art" />
                  <div className="meta-container">
                    <div className="song-title">{song["name"]}</div>
                    <div className="song-artist">{song["artist"]}</div>
                    <progress className="amplitude-song-played-progress" data-amplitude-song-index={index} ref={this.myRefs[index]} onClick={(e) => this.onClickProgress(e, index, this.myRefs[index])}></progress>
                    <div className="time-container">
                      <div className="current-time">
                        <span className="amplitude-current-minutes" data-amplitude-song-index={index}></span>:<span className="amplitude-current-seconds" data-amplitude-song-index={index}></span>
                      </div>

                      <div className="duration">
                        <span className="amplitude-duration-minutes" data-amplitude-song-index={index}>3</span>:<span className="amplitude-duration-seconds" data-amplitude-song-index={index}>30</span>
                      </div>
                    </div>
                    <div className="control-container">
                      <div className="amplitude-play-pause" data-amplitude-song-index={index}>

                      </div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    );
  }
  render() {
    const element = (this.props.section === "desc") ? this.description() : this.images()

    return (
      element
    )
  }

}

export default MusicOriginal