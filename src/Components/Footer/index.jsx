import React, {Component} from "react";
import './index.css'
class Footer extends Component{

    componentDidMount() {
        console.log("Footer mounted.")
    }

    render() {

        const persons = this.props.persons
        const selectCount = persons.reduce((pre, current) => pre + (current.done ? 1 : 0), 0);
        const selectIds = [];
        for(let i = 0; i < persons.length; i ++){
            let person = persons[i];
            if(person.done === true){
                selectIds.push(person.id);
            }
        }
        const total = persons.length


        return (
            <div className="Footer">
                <input type="checkbox" onChange={this.props.updateChecked}/>
                {selectCount} / {total}
                <button onClick={this.props.deleteSelectItems(selectIds)}>delete checked items</button>
            </div>
        )
    }
}

export default Footer;