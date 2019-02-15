import React from "react";

export default class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      subject: 'people',
      errorMessage: '',
      error: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset()
    this.props.searchTerm(this.state.searchTerm, this.state.subject);
  };

  handleSubject = e => {
    this.setState({
      subject: e.target.value
    });
  };

  handleSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value.trim()
    });
  };

  

  render() {
    return (
      <div>
        <form className="searchForm" onSubmit={e => this.handleSubmit(e)}>
          <label className="searchTerm-label" id="searchTerm-label" />
          <input
            type="text"
            className="searchTerm"
            onChange={e => this.handleSearchTerm(e)}
          />
          <select
            className="searchSelector"
            onChange={e => this.handleSubject(e)}
          >
            <option value="people">Characters</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="planets">planets</option>
            <option value="films">Films</option>
            <option value="species">Species</option>
          </select>
          
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}