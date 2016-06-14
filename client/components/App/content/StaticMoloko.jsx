import React from 'react';
import Relay from 'react-relay';

class StaticMoloko extends React.Component {
  filter(arr,id){
    var out = arr.filter(edge => {
      if(edge.node.categoryId == id)
      return edge
    })
    return out;
    console.log(out);
  }
  render() {
    var filterProd = this.filter(this.props.prod.edges,this.props.children.node._id);
    return (
      <div className='tabWrapper'>
        {filterProd.map(edge =>
        <div key={edge.node.id} className="col-xs-3">
          <div className="cattle">
            <div className="category__item">
              <div className="item__wrapper">
                  <div className="imgWraper">
                      <img className='img-responsive' src={require(`../../../assets/uploads/${edge.node.img}`)} alt=""/>
                  </div>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    );
  }
}
export default Relay.createContainer(StaticMoloko, {
  fragments: {
    prod : () => Relay.QL `
    fragment on MebelConnection{
      edges{
        node{
          id
          title
          img
          categoryId
        }
      }
    }`
  }
})
