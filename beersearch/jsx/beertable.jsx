import React from 'react';
import BeerRow from './beerrow';
import BeerOriginRow from './beeroriginrow';


class BeerTable extends React.Component {
  render() {
    var rows = [];
    var lastOrigin = null;
    this.props.beers.forEach(beer => {
      if (beer.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
        return;
      }
      if (beer.origin !== lastOrigin) {
        rows.push(<BeerOriginRow origin={beer.origin} key={beer.origin} />);
      }
      rows.push(<BeerRow beer={beer} key={beer.name} />);
      lastOrigin = beer.origin;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Abv</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
};

export default BeerTable;
