import React, {Component} from "react";
import './index.css'
class Item extends Component{

    state = {

        person : this.props.person,
        name : this.props.person.name,
        age : this.props.person.age,
        updatePerson : this.props.updatePerson,
        deletePerson : this.props.deletePerson
    }

    componentDidMount() {

        console.log("Item mounted.")
    }

    update = () => {

        let id = this.state.person.id;
        let newPerson = {};
        newPerson.id = id;
        newPerson.name = this.state.name;
        newPerson.age = this.state.age
        this.state.updatePerson(id, newPerson)
    }

    updateName = (e) => {

        this.setState({name : e.target.value})
    }

    updateAge = (e) => {

        this.setState({age : e.target.value})
    }

    delete = () => {
        this.state.deletePerson(this.props.person.id)
    }


    render() {
        return(
            <div className="Item">
                <li>
                    person name is <input onChange={this.updateName}  value = {this.state.name}/>, and person age is <input onChange={this.updateAge} value = {this.state.age}/>
                    <button onClick={this.update}>update</button> <button onClick={this.delete}>delete</button>
                </li>
            </div>
        )
    }
}
export default Item;