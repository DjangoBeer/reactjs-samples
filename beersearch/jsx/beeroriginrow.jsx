import React from 'react';


class BeerOriginRow extends React.Component {
  render() {
    return (
      <tr><th colSpan="2">{this.props.origin}</th></tr>
    );
  }
};

export default BeerOriginRow;
