import React from 'react';
import Unit from './Unit.jsx';
import Relay from 'react-relay';

 class List  extends React.Component {
  render() {
    const { props: { subcategories: subcategories } } = this
    return (
      <div className='ui  middle aligned list'>
        {subcategories.edges.map(edge =>
        <Unit viewer={this.props.viewer} key={edge.node.id} subcategory={edge.node}/>
      )}
      </div>
    );
  }
}

export default Relay.createContainer(List, {
  fragments: {
    viewer:() => Relay.QL `
    fragment on Viewer {
      ${Unit.getFragment('viewer')}
    }`,
    subcategories: () => Relay.QL `
    fragment on SubCategoryConnection {
      edges {
        node {
          id
          ${Unit.getFragment('subcategory')}
        }
      }
    }`
  }
})
