import React from "react";

export default class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      subject: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
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
          <select
            className="searchSelector"
            onChange={e => this.handleSubject(e)}
          >
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="people">Characters</option>
            <option value="films">Films</option>
            <option value="species">Species</option>
          </select>
          <input
            type="text"
            className="searchTerm"
            onChange={e => this.handleSearchTerm(e)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
