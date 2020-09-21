import React from "react"
import tabStyles from "./Tab.module.css"
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import VideoSlide from "./VideoSlide"
import styles from "./Videos.module.css"
import Resume from "./Resume"
const resume = [{
  "title": "Lexington High School Madrigal Singers: 10-12",
  "extra": ["MICCA Gold Medal",
		"WGBH’s Sing That Thing! Overall Champions",
		"Christmas caroling fundraisers at Seasons Four",
		"Performance at Carnegie Hall",
		"Performance at Baltic Centennial in Boston",
	  "Feature soloist"
]
},
{
  "title": "Lexington High School Concert Choir: 9",
  "extra": ["MICCA Gold Medal",
  "Greece and Bulgaria Tour",
  "Feature soloist"]
},
{
  "title": "Massachusetts Music Educators Association All States Choir: 10, 11",
  "extra": []
},
{
  "title": "Massachusetts Music Educators Association Northeastern Districts Choir: 9-11",
  "extra": []
},

]
class MusicContemporary extends React.Component {

  constructor(props) {
    super(props)
  }

  description() {
    return (
      <div>
        <p className={tabStyles.description}>I have performed a great variety of amazing repertoire in my time with Lexington High School’s premier honors choir, Madrigal Singers. I’ve also performed with the Massachusetts All-State Chorus at Boston's Symphony Hall, and with the Lexington High School Honors Concert Choir on a tour across Greece and Bulgaria.
Below are my favorite performances, as well as my detailed resumé!</p>
      </div>
    );
  }

  images() {
    return (
      <div >
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
            this.props.songs.map((song) => (
            <SwiperSlide className={styles['swiper-slide']}>
                <VideoSlide song={song} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <Resume info = {resume}/>

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