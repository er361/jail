import React from 'react';
import Relay from 'react-relay';
import Card from './Card.jsx';
class BezCat extends React.Component {
  filter = (arr, id) => {
    // console.log(arr, id);
    var out = [];
    out = arr.filter(edge=> {
      if(edge.node.categoryId == id)
        return edge;
    })
    // console.log(out);
    return out;
  }
  render() {
    var filterProd = this.filter(this.props.prod.edges,this.props.children.node._id);
    // console.log(filterProd);
    return (
      <div className='tabWrapper'>
          {filterProd.map(edge =>
          <div key={edge.node.id} className="col-xs-3">
            <Card >{edge.node}</Card>
          </div>)}
      </div>
    );
  }
}
export default Relay.createContainer(BezCat, {
  fragments: {
    prod: () => Relay.QL `
    fragment on MebelConnection {
      edges{
        node{
          img
          id
          title
          categoryId
        }
      }
    }`
  }
})
