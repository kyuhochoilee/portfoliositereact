import React from "react"
import tabStyles from "./Tab.module.css"
import "./Player.css"
import * as  Amplitude from "amplitudejs"

import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import styles from "./Music.module.css"
import Resume from "./Resume"

SwiperCore.use([EffectCoverflow, Pagination]);

const resume = [{
  "title": "Composed and produced a virtual performance by my a cappella group of “We All Belong”, an anthem for the Lexington Public Schools system commissioned by the School Committee.",
  "extra": []
},
{
  "title": "Wrote, produced, and performed “Give Us a Hand”, a song about climate change awareness for the 2020 Bow Seat Ocean Awareness Contest.",
  "extra": []
},
{
  "title": "Performed an original song at Lex Vegas, an event that I helped build from scratch as part of the LHS Class of 2021 Class Council that increased our fundraising revenue from $0 to $1500.",
  "extra": []
}
]

class MusicOriginal extends React.Component {

  constructor(props) {
    super(props)
    this.myRefs = props.songs.map(() => React.createRef())

  }

  description() {
    return (
      <div>
        <p className={tabStyles.description}>All of the songs below were written, recorded, and produced by me in my bedroom. I use FL Studio 20 to produce my music. Below are a few of my favorite songs that I've produced, as well as a short resumé!</p>

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
        <div className={
          `${styles['swiper-container-3d']} ${styles['swiper-container']}`}>
          <Swiper
            keyboard={{ enabled: true }}
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
              this.props.songs.map((song, index) => (
                <SwiperSlide className={styles['swiper-slide']}>
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
        <Resume info={resume}/>
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