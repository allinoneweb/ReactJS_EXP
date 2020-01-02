import React, { Component } from "react";
const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";
class FetchDataExp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: []
    };
  }
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.hits.map(hit => (
            <li key={hit.objectID}>
              <a href={hit.url}>{hit.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default FetchDataExp1;
