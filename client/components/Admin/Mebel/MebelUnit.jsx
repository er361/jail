import React from 'react';
import Relay from 'react-relay';
import MakeInputTable from './MakeInputTable.jsx';
import './Mebel.scss';


//mutations
import DeleteMebelMutation from '../../../mutations/admin/mebel/DeleteMebelMutation.js';

// TODO: edit img
// TODO: edit table

class MebelUnit extends React.Component {
  state = {
    text: '',
    isEditing: false
  }
  handleClick = (e) => {
    e.preventDefault();
  }
  handleEdit = () => {
    this.setState({
      isEditing: true
    })
  }
  handleCancel = () => {
    this.setState({
      isEditing: false
    });
  }
  handleDestroy = () => {
    Relay.Store.commitUpdate(new DeleteMebelMutation({
      id: this.props.mebel.id,
      viewer: this.props.viewer
    }));
  }
  makeInput = (data) => {
    // console.log('make input');
    if(this.state.isEditing){
      // console.log('v nutri if');
      return(
        <MakeInputTable
          data={data}
          onCancel={this.handleCancel}/>
        )
    } else {
      return null;
    }
  }

  makeCell = (data) => {
    return(
      <td   className='selectable'>
        <a onClick={this.handleClick}  href="">{this.state.isEditing ? null : data}</a>
      </td>
    )
  }

  makeCellImg = (data) => {
    if(!data)
      return (<td>data</td>)
      else
        return (
          <td>
            <img  className='imgPreview'  src={require(`../../../assets/uploads/${data}`)} alt=""/>
          </td>
        )
  }
  makeSpecialCell = (data) => {
    // console.log(data);
    return(
      <td>
        {data.node.title}
      </td>
    )
  }
filter = (arr,filter) => {
  var filtered = [];
  if(Array.isArray(arr)){
     filtered = arr.filter(edge => {
      if(edge.node._id == filter)
        return edge
    })
    // console.log(filtered);
  }else{
    return null;
  }
  return filtered[0]
}
  render() {
    const { props: props, props: { mebel: mebel, viewer: {categories: categories, subcategories: subcategories } } } = this
     var cat = this.filter(categories.edges,mebel.categoryId);
     var subCat = this.filter(subcategories.edges,mebel.subcategoryId);
    return (
      <tr>
        {this.makeCell(mebel.title)}
        {this.makeCellImg(mebel.img)}
        {this.makeCell(mebel.price)}
        {this.makeCell(mebel.poroda)}
        {this.makeSpecialCell(cat)}
        {this.makeSpecialCell(subCat)}
        <td>
          <button onClick={this.handleDestroy} className='ui tiny red basic button'>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Relay.createContainer( MebelUnit, {
  prepareVariables(){
    return {
      limit: 100
    }
  },
  fragments: {
    viewer: () => Relay.QL `
    fragment on Viewer {
      ${DeleteMebelMutation.getFragment('viewer')}
      categories(first: $limit){
        edges{
          node{
            _id
            title
          }
        }
      }
      subcategories(first: $limit){
        edges{
          node{
            _id
            title
          }
        }
      }
    }
    `,
    mebel: () => Relay.QL `
    fragment on Mebel {
      id
      title
      img
      categoryId
      subcategoryId
      price
      art
      poroda
    }`
  }
})
