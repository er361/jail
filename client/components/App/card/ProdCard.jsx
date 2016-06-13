import React from 'react';
import Relay from 'react-relay';

class ProdCard extends React.Component {
  render() {
    return (
      <h1>CARD bl9t</h1>
    );
  }
}

export default Relay.createContainer(ProdCard,{
  fragments: {
    viewer: () => Relay.QL `
    fragment on Viewer {
      id
    }`
  }
})
