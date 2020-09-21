import React from "react"
import styles from "./ImageStyles.module.css"

class VideoSlide extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <img className={styles.image} src={this.props.image.url} alt={this.props.image.title}/>
                <a className={styles.title} href={this.props.image.link}>{this.props.image.title}</a>
                <p className={styles.desc}>{this.props.image.desc}</p>

            </div>
        )
    }
}

export default VideoSlide