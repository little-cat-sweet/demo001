import React, {Component} from "react";
import List from "../List";
import Header from "../Header";
import Footer from "../Footer";

class Manage extends Component{

    state = {
        persons : [
            {
                id : "001",
                age : 45,
                name : "tom",
                done : true
            },
            {
                id : "002",
                age : 18,
                name : "mary",
                done : false
            }
        ]
    }

    update = (id, newPerson) => {

        const {persons} = this.state;
        const newPersons = persons.map(item => {
            if(item.id === id){
                return newPerson
            }else{
                return item;
            }
        })
        this.setState({persons : newPersons})
    }

    delete = (id) => {

        let arr = [];
        let persons = this.state.persons;
        for(let i = 0; i < persons.length; i ++){
            let person = persons[i];
            if(person.id !== id){
                arr.push(person);
            }
        }
        this.setState({persons : arr})
    }

    add = (person) => {

        if (window.confirm("you sure you wanna add ?")) {

            let newPersons = this.state.persons;
            newPersons.push(person);
            this.setState({persons : newPersons});

        }
    }

    componentDidMount() {
        console.log("Manage mounted.")
    }

    updateChecked = (id, checked) => {

        let newPersons = [];
        const {persons} = this.state;
        for(let i = 0; i < persons.length; i ++){
            let person = persons[i];
            if(person.id !== id){
                newPersons.push(person)
            }else{
                person.done = checked
                newPersons.push(person)
            }
        }
        this.setState({persons: newPersons})
    }

    updateCheckedByFooter = (e) => {

        let newPersons = [];
        const {persons} = this.state;
        for(let i = 0; i < persons.length; i ++){
            let person = persons[i];
            person.done = e.target.checked;
            newPersons.push(person);
        }
        console.log(JSON.stringify(newPersons))
        this.setState({persons: newPersons})
    }

    deleteSelectItems = (ids) => {
        return () => {
            let newPersons = [];
            const {persons} = this.state;
            for(let i = 0; i < persons.length; i ++){
                let person = persons[i];
                if(ids.indexOf(person.id) === -1){
                    newPersons.push(person);
                }
            }
            this.setState({persons: newPersons})
        }
    }

    render() {

        const persons = this.state.persons
        return(
            <div>
                <Header addPerson={this.add}/>
                <List
                    persons = {persons}
                    deletePerson = {this.delete}
                    upChecked = {this.updateChecked}
                />
                <Footer
                    persons = {persons}
                    deleteSelectItems = {this.deleteSelectItems}
                    updateChecked = {this.updateCheckedByFooter}
                />
            </div>
        )
    }
}
export default Manage