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
                name : "tom"
            },
            {
                id : "002",
                age : 18,
                name : "mary"
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

        let newPersons = this.state.persons;
        newPersons.push(person);
        this.setState({persons : newPersons});
        alert("add successfully !")
    }

    componentDidMount() {
        console.log("Manage mounted.")
    }

    flushFooter = () =>{

    }

    render() {
        const persons = this.state.persons
        return(
            <div>
                <Header addPerson={this.add}/>
                <List persons = {persons} updatePerson={this.update} deletePerson = {this.delete}/>
                <Footer persons = {persons}/>
            </div>
        )
    }
}
export default Manage