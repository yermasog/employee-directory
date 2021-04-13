import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Container from "./Container";
import Table from "./Table"
import API from "../utils/API";
import Button from "./Button";

class RandomUserContainer extends Component {
    state = {
    
        result: [],
        filterFemale: [],
        filtered: true
        //picture: obj.picture.thumbnail,
        // firstName: obj.name.first,
        // lastName: obj.name.last,
        // email: obj.email,
        // phone: obj.cell

    };

    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        this.RenderEmployees();


    }

    RenderEmployees = () => {
        API.search()
            .then(res => {
                // console.log(res.data.results);
                let myResults = res.data.results.map(obj => {
                    let rObj = {
                        picture: obj.picture.large,
                        firstName: obj.name.first,
                        lastName: obj.name.last,
                        email: obj.email,
                        phone: obj.cell,
                        gender: obj.gender,
                       
                    }
                    return rObj
                })
                this.setState({ result: myResults })
            })
            .catch(err => console.log(err));
    };

    sortEmployees = () => {
        // sort by name
        this.setState(
            this.state.result.sort((a, b) => a.firstName > b.firstName ? 1 : -1));
        console.log(this.state.result);

    }

    filterFemaleEmployees = () => {
        
         let femaleArr = this.state.result.filter(emp => emp.gender === "female")
            console.log(this.state.result);
            this.setState({result: femaleArr})
            console.log(femaleArr);
    }

    clearFilter =() => {

    }

    render() {
        return (
            <Container>
                <Jumbotron jumbo="jumbotron">
                    <h1>Employee Directory</h1>
                </Jumbotron>
                {/* <Button />
                */}
                <button className="btn btn-danger" onClick={this.sortEmployees}>Sort by Name</button>
                <button className="btn btn-danger" onClick={this.filterFemaleEmployees}>Filter by Gender: Female</button>
               
                <Table data={this.state.result}>


                </Table>
            </Container >
        );
    }
}

export default RandomUserContainer;