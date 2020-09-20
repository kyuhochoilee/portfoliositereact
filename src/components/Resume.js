import React from "react"
import tabStyles from "./Tab.module.css"
import SubText from "./Subtext"

class Resume extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className={tabStyles.container}>
                <h1 className={tabStyles.title}>resumé</h1>
            {this.props.info.map ((item)=> (
                <div>
                    <h1 className={tabStyles.description}> {item.title} </h1> 
                    <SubText info = {item.extra}/>
                    <br/> 
                </div>
            ))}
            </div>
        )
    }
}

export default Resume