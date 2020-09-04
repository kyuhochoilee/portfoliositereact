import React from "react"
import tabStyles from "./Tab.module.css"

class MusicContemporary extends React.Component {

    constructor(){
      super()
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
            <h1>Hi</h1>
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

export default MusicContemporary