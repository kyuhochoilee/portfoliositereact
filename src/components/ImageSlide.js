import React from "react"
import styles from "./ImageStyles.module.css"

class VideoSlide extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.container}>
                <img className={styles.image} src={this.props.image.url} width="600" height="300"/>
                <p className={styles.desc}>{this.props.image.desc}</p>
            </div>
        )
    }
}

export default VideoSlide