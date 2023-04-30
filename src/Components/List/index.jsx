import React, {Component} from "react";
import Item from "../Item";

class List extends Component{

    componentDidMount() {
        console.log("List mounted.")
    }

    render() {
    const {persons, deletePerson, upChecked} = this.props
        return (
            <div>
                <ul>
                    {
                        persons.map((item) => {
                            return (
                                <Item
                                    key={item.id}
                                    deletePerson = {deletePerson}
                                    person = {item}
                                    updateChecked = {upChecked}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List;