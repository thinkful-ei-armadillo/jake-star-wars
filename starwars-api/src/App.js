import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import "./App.css";
import DisplayResults from "./DisplayResults/DisplayResults";
import Header from "./Header/Header";
import ErrorBoundary from "./errorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      error: null
    };
  }

  searchTerm = (searchTerm, subject) => {

    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    };
    fetch(`https://swapi.co/api/${subject}/?search=${searchTerm}`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        console.log("first then res", res);
        return res;
      })
      .then(res => res.json())
      .then(data => {
        if(data.results.length<1){
          this.setState({
            results: [{name:'Your search returned 0 results'}]
          })
        } else{
        this.setState({
          results: data.results
        })}}
      )
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    console.log("state", this.state.results);
    return (
      <ErrorBoundary>
      <div className="main-container">
        <Header />
        <div className="searchbar-main">
          <Searchbar
            searchTerm={(searchTerm, subject) =>
              this.searchTerm(searchTerm, subject)} />
        </div>
        <div className="displayResults-main">
          <DisplayResults results={this.state.results} />
        </div>
      </div>
      </ErrorBoundary>
    );
  }
}

export default App;