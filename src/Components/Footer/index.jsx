import React, {Component} from "react";
import './index.css'
class Footer extends Component{

    componentDidMount() {
        console.log("Footer mounted.")
    }

    render() {
        const persons = this.props.persons

        const total = persons.length
        return (
            <div>
                sum : {total}
            </div>
        )
    }
}

export default Footer;