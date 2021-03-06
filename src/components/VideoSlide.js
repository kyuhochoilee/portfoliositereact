import React from "react"
import styles from "./VideoStyles.module.css"

class VideoSlide extends React.Component {

    render() {
        return (
            <div>
                <iframe src={this.props.song.url} title={this.props.song.name} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <div className ={styles.infocontainer}>
                    <h1 className={styles.name}>{this.props.song.name}</h1>
                    <h3 className={styles.about}>{this.props.song.about}</h3>
                    <h3 className={styles.who}>{this.props.song.who}</h3>
                    <h3 className={styles.where}>{this.props.song.where}</h3>
                    <p className={styles.desc}>{this.props.song.desc}</p>
                </div>
            </div>
        )
    }
}

export default VideoSlide