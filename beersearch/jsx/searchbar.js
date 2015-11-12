import React from 'react';


class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(
      React.findDOMNode(this.refs.filterTextInput).value
    );
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange.bind(this)} />
      </form>
    );
  }
};


export default SearchBar;
