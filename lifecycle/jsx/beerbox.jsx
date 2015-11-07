import React from 'react';


class BeerBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      abv: 0,
      origin: '',
      ok: false
    };
  }

  loadBeerFromServer() {
    setTimeout(() => {
      this.setState(
        {
          name: 'Guinness',
          abv: 5,
          origin: 'Ireland',
          ok: true
        }
      );
    }, 2000);
  }

  componentDidMount() {
    this.loadBeerFromServer();
  }

  render() {
    return (
      <div className="beerBox" style={{display: this.state.ok ?  '' : 'None'}}>
        <p><b>Name: </b>{this.state.name}</p>
        <p><b>Abv: </b>{this.state.abv}%</p>
        <p><b>Origin: </b>{this.state.origin}</p>
      </div>
    );
  }
};

export default BeerBox;
