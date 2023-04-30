import React, {Component} from "react";
import {nanoid} from "nanoid";
import './index.css'
class Header extends Component{

    state = {

        name : "",
        age : 0
    }

    componentDidMount() {
        console.log("Header mounted.")
    }

    addPerson = () => {

        let name = this.state.name.trim();
        let person = {
            id : nanoid(),
            name : name,
            age : this.state.age
        }
        this.setState({name : ""})
        this.setState({age : 0})
        this.props.addPerson(person)
    }

    updateName = (e) => {
        let name = e.target.value;
        this.setState({name : name})
    }

    updateAge = (e) => {
        let age = e.target.value;
        this.setState({age : age})
    }

    render() {
        return (
            <div className="Header">
                please input name : <input onChange = {this.updateName} value = {this.state.name}/>,
                please input age : <input onChange = {this.updateAge} value = {this.state.age}/>
                <button onClick = {this.addPerson}>add person</button>
            </div>
        )
    }
}
export default Header;