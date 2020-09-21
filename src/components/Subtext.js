import React from "react"
import tabStyles from "./Tab.module.css"

class SubText extends React.Component {
    render(){
        return(
            <div>
            {this.props.info.map((text) => (
                <h1 className={tabStyles.sub}> <i>{text}</i></h1> 
                ))
            }
            </div>
        )
    }
}

export default SubText