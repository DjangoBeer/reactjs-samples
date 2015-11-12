import React from 'react';
import SearchBar from './searchbar';
import BeerTable from './beertable';


let MOCK_DATA = [
  { name: 'Guinness', abv: 5, origin: 'Ireland' },
  { name: 'McEwan', abv: 5, origin: 'Ireland' },
  { name: 'Corona', abv: 5, origin: 'Mexico' },
];

class BeerSearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      filterText: ''
    };
  }

  loadBeersFromServer() {
    setTimeout(() => {
      this.setState({
        beers: MOCK_DATA
      });
    }, 2000);
  }

  componentDidMount() {
    this.loadBeersFromServer();
  }

  handleUserInput (filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  render() {
    return (
      <div>
        <SearchBar onUserInput={this.handleUserInput.bind(this)}/>
        <BeerTable filterText={this.state.filterText} beers={this.state.beers}/>
      </div>
    )
  }
};


export default BeerSearchBox;
