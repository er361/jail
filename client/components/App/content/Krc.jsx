import React from 'react';
import Relay from 'react-relay';
import Unit from './Unit.jsx';
import classNames from 'classnames';
import Card from './Card.jsx';
import './Krc.scss';
import {Grid, Col, Row} from 'react-bootstrap';

class Krc extends React.Component {
  state = {
    category: this.props.children.node._id,
    active: false
  }
  filterCat = (arr, filter) => {
    var out = [];
    if(Array.isArray(arr)){
      out = arr.filter(edge => {
        if(edge.node.categoryId == filter){
          return edge
        }
      })
    }
    return out;
  }
  filterSubCat = (arr,filter) => {
    var out = [];
    if(Array.isArray(arr)){
      out = arr.filter(edge => {
        if(edge.node.subcategoryId == filter){
          return edge
        }
      })
    }
    return out;
  }
  makeTabs = (arr) => {
    var block ;

    if(Array.isArray(arr)){
      block = arr.map((edge,index)=> {
        var tabClass = classNames({
          'tab-pane': true,
          'active': false
        })
        var prodFiltr = this.filterSubCat(this.props.prod.edges,edge.node._id);
        // console.log(prodFiltr);
        if(index == 0)
          tabClass = classNames({
            'tab-pane': true,
            'active': true
          })
          return <div key={index} role="tabpanel" className={tabClass} id={index}>
            {prodFiltr.map(edge =>
                  <div key={edge.node.id}  className='col-xs-3'>
                    <Card>{edge.node}</Card>
                  </div>
            )}</div>
        // console.log(tabClass);
      })
      return block;
    }
  }

  render() {
    const { props: {prod: prod, subcategories: subcategories } } = this
    var subCatFiltr = this.filterCat(subcategories.edges,this.state.category);
    // console.log(subCatFiltr);
    return (
      <div>
          <ul className='nav nav-tabs' role='tablist'>
            {subCatFiltr.map((edge,index) => {
              var liClass = classNames({'active': false});
            if(index == 0)
              liClass = classNames({'active': true});
              return (
                <li key={edge.node.id} role="presentation" className={liClass}>
                  <a href={`#${index}`} aria-controls={index} role="tab" data-toggle="tab">{edge.node.title}</a>
                </li>
              )
            })}
          </ul>
        <div className="tab-content">
            {this.makeTabs(subCatFiltr)}
        </div>
      </div>
    );
  }
}

export default Relay.createContainer(Krc, {
  fragments: {
    subcategories: () => Relay.QL `
    fragment on SubCategoryConnection {
      count
      edges{
        node{
          _id
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
          art
          img
          price
          poroda
          subcategoryId
          id
          title
        }
      }
    }`
  }
})
