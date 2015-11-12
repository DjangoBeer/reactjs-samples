import React from 'react';


class BeerRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.beer.name}</td>
        <td>{this.props.beer.abv}%</td>
      </tr>
    );
  }
};

export default BeerRow;
