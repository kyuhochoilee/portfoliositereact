import React from "react"
import Diwali from "../img/rpsdiwali.JPG"
import tabStyles from "./Tab.module.css"

const resumeFurther = {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)"
}

class DesignIndex extends React.Component {

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
            <img style={resumeFurther} src={Diwali} alt="kyuho solos with rps at diwali festival"/>
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

export default DesignIndex