import React, {Component} from "react";
import './index.css'
class Item extends Component{

    state = {

        deletePerson : this.props.deletePerson,
        updateChecked : this.props.updateChecked
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
    }

    delete = () => {

        this.state.deletePerson(this.props.person.id)
    }

    updateC = (id) => {
        return (event) => {
            this.state.updateChecked(id, event.target.checked);
        }
    }


    render() {
        const {done, id, name, age} = this.props.person
        return(
            <div className="Item">
                <li>
                    <label><input type="checkbox"  checked={done} onChange={this.updateC(id)}/></label>
                    person name is {name}, and person age is {age}
                    <button onClick={this.delete}>delete</button>
                </li>
            </div>
        )
    }
}
export default Item;