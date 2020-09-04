import React from "react"
import tabStyles from "./Tab.module.css"
import "./Music.css"
import * as  Amplitude from "amplitudejs"
import homeMP3 from "../audio/home.mp3"
import cover1 from "../img/sameoldsong.png"


class MusicOriginal extends React.Component {

  constructor(props) {
    super(props);
    this.myRefs = props.songs.map(() => React.createRef());
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
      "songs": this.props.songs,
    });
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
  onClickProgress(e, currentIndex, ref) {
    // console.log(e);
    // console.log(currentIndex);
    // console.log(ref);
    if (Amplitude.getActiveIndex() == currentIndex) {
      var offset = ref.current.getBoundingClientRect();
      var x = e.pageX - offset.left;
      Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(ref.current.offsetWidth)) * 100);
    }
  }
  images() {
    return (
      <div>
        {
          this.props.songs.map((song, index)=> (
            <div className="player">
              <img src={cover1} className="album-art" />
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
          ))
        }
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