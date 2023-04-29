import React, {Component} from "react";

class Item extends Component{

    state = {

        person : this.props.person,
        name : this.props.person.name,
        age : this.props.person.age,
        updatePerson : this.props.updatePerson,
        deletePerson : this.props.deletePerson
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
        console.log("name func execute")

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
            <>
                <li>
                    person name is <input onChange={this.updateName}  value = {this.state.name}/>, and person age is <input onChange={this.updateAge} value = {this.state.age}/>
                    <button onClick={this.update}>update</button> <button onClick={this.delete}>delete</button>
                </li>
            </>
        )
    }
}
export default Item;