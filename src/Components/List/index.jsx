import React, {Component} from "react";
import Item from "../Item";

class List extends Component{

    componentDidMount() {
        console.log("List mounted.")
    }

    render() {
    const {persons, updatePerson, deletePerson} = this.props
        return (
            <div>
                <ul>
                    {
                        persons.map((item) => {
                            return (
                                <Item key={item.id} deletePerson = {deletePerson} person = {item} updatePerson = {updatePerson}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List;