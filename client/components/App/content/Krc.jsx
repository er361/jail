import React from 'react';
import Relay from 'react-relay';
import Unit from './Unit.jsx';
import { Tabs,Tab, Button } from 'react-bootstrap';

class Krc extends React.Component {
  state = {
    category: this.props.children.node._id
  }

  filter = (arr, filter) => {
    var out = [];
    if(Array.isArray(arr)){
      out = arr.filter(edge => {
        // console.log(`${edge.node.categoryId} = ${filter}`);
        if(edge.node.categoryId == filter){
          return edge
        }
      })
    }
    return out;
  }
  render() {
    const { props: {prod: prod, subcategories: subcategories } } = this
    var subCatFiltr = this.filter(subcategories.edges,this.state.category);
    console.log(subCatFiltr);
    return (
      <div>
        <ul>
          {subCatFiltr.map(edge => {
            return (
              <li onClick={this.showTab}>{edge.node.title}</li>
            )
          })}
        </ul>
        <div className="tabContetn">
          contetn
        </div>
      </div>
    );
  }
}

export default Relay.createContainer(Krc, {
  fragments: {
    subcategories: () => Relay.QL `
    fragment on SubCategoryConnection {
      edges{
        node{
          categoryId
          title
          id
        }
      }
    }
    `,
    prod: () => Relay.QL `
    fragment on MebelConnection {
      edges {
        node {
          subcategoryId
          id
          title
        }
      }
    }`
  }
})
