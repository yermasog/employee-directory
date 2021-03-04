import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Container from "./Container";
import Row from "./Row";
import API from "../utils/API";

class RandomUserContainer extends Component {
      state = {
        result: {},
        
      };

      // When this component mounts, search for the movie "The Matrix"
      componentDidMount() {
        this.RenderEmployees();
      }

      RenderEmployees = () => {
        API.search()
          .then(res => this.setState({ result: res.data }))
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
                <Jumbotron className="jumbotron">
                    <h1>Employee Directory</h1>
                </Jumbotron>
                <Row>
                    
                </Row>
            </Container>
        );
    }
}

export default RandomUserContainer;