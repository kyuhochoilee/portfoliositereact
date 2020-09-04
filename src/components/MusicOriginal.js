import React from "react"
import tabStyles from "./Tab.module.css"
import "./Music.css"
import * as  Amplitude from "amplitudejs"
import homeMP3 from "../audio/home.mp3"
import cover1 from "../img/sameoldsong.png"

class MusicOriginal extends React.Component {

  constructor() {
    super()
  }

  description() {
    return (
      <div>
        <p className={tabStyles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    );
  }
  componentDidMount() {
    Amplitude.init({
      "songs": [{
        "name": "home",
        "artist": "EDEN",
        "album": "periscope tapes",
        "url": {homeMP3},
        "cover_art_url": {cover1}
      },
      {
        "name": "dreaming about you",
        "artist": "EDEN",
        "album": "periscope tapes",
        "url": "../audio/dreamingaboutyou.mp3",
        "cover_art_url": "../img/sameoldsong.png"
      },
      {
        "name": "Chevalier",
        "artist": "Daniel Caesar",
        "album": "Birds of Paradise EP",
        "url": "../audio/chevalier.mp3",
        "cover_art_url": "../img/sameoldsong.png"
      }

      ]
    });
    // function onClickProgress(e, currentIndex, self) {
    //   if (Amplitude.getActiveIndex() == currentIndex) {
    //     var offset = self.getBoundingClientRect();
    //     var x = e.pageX - offset.left;
    //     Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(self.offsetWidth)) * 100);
    //   }
    // }
    // document.getElementById('song-played-progress-1').addEventListener('click', function (e) {
    //   onClickProgress(e, 0, this);
    // });
    // document.getElementById('song-played-progress-2').addEventListener('click', function (e) {
    //   onClickProgress(e, 1, this);
    // });
    // document.getElementById('song-played-progress-3').addEventListener('click', function (e) {
    //   onClickProgress(e, 2, this);
    // });

  }
  images() {
    return (
      <div>
        <div className="player">
          <img src={cover1} className="album-art" />
          <div className="meta-container">
            <div className="song-title">home</div>
            <div className="song-artist">EDEN</div>


            <progress className="amplitude-song-played-progress" data-amplitude-song-index="0" id="song-played-progress-1"></progress>
            <div className="time-container">
              <div className="current-time">
                <span className="amplitude-current-minutes" data-amplitude-song-index="0"></span>:<span className="amplitude-current-seconds" data-amplitude-song-index="0"></span>
              </div>

              <div className="duration">
                <span className="amplitude-duration-minutes" data-amplitude-song-index="0">3</span>:<span className="amplitude-duration-seconds" data-amplitude-song-index="0">30</span>
              </div>
            </div>
            <div className="control-container">
              <div className="amplitude-play-pause" data-amplitude-song-index="0">

              </div>

            </div>
          </div>
        </div>
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