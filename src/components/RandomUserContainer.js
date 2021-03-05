import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Container from "./Container";
import Table from "./Table"
// import Column from "./Column";
// import Row from "./Row";
import API from "../utils/API";

class RandomUserContainer extends Component {
    state = {
        
        result: [],
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
                console.log(res.data.results);
                let myResults = res.data.results.map(obj => {
                    let rObj = {
                        picture: obj.picture.thumbnail,
                        firstName: obj.name.first,
                        lastName: obj.name.last,
                        email: obj.email,
                        phone: obj.cell
                    }
                    return rObj
                })
                this.setState({result: myResults})
            })
            .catch(err => console.log(err));
    };

    //   handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //       [name]: value
    //     });
    //   };

    //   // When the form is submitted, search the OMDB API for the value of `this.state.search`
    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchMovies(this.state.search);
    //   };

    render() {
        return (
            <Container>
                <Jumbotron jumbo="jumbotron">
                    <h1>Employee Directory</h1>
                </Jumbotron>
                <Table data={this.state.result}>
                    
                </Table>
            </Container>
        );
    }
}

export default RandomUserContainer;