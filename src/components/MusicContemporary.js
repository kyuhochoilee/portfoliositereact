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
  "title": "Lexington High School Rock, Paper, Scissors A Cappella: 9-12",
  "extra": ["Emersong (Emerson Hospital fundraiser a cappella concert)", 
  "Icecapella (Fundraiser concert at Concord-Carlisle High School)", 
  "Indian Americans of Lexington Diwali Fundraiser"]
},
{
  "title": "Vocal Lessons: 9-12",
  "extra": []
},
{
  "title": "Lexington High School Singing Valentines: 10-12",
  "extra": []
},
{
  "title": "Took part in a musical theater singing workshop with Broadway singer Sara Jean Ford (Phantom of the Opera, Cats): 11",
  "extra": []
},
{
  "title": "Lexington High School Follies: 9, 10",
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
        <p className={tabStyles.description}>I often perform contemporary music, whether it be pop songs with my a cappella group, Rock, Paper, Scissors, or music theater repertoire at Lexington High School concerts. Below are a few of my performances, as well as a resumé with further details.</p>
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