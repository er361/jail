import React from 'react';
import Relay from 'react-relay';

import AddMebelMutation from '../../../mutations/admin/mebel/AddMebelMutation.jsx';
import MebelCreateForm from './MebelCreateForm.jsx';
import MebelList from './MebelList.jsx';
import img from '../../../assets/babel.png';

class Mebel extends React.Component {
  componentDidMount() {
    //console.log(this.props);
    // $('.ui.modal').modal();
  }
  handleSave = (data) => {
    //add viewer id
    data.viewer = this.props.viewer;
    console.log(data.categoryId);
    Relay.Store.commitUpdate(new AddMebelMutation({
      categoryId: data.categoryId,
      subcategoryId: data.subcategoryId,
      title: data.title,
      img: data.img,
      price: data.price,
      art: data.art,
      poroda: data.poroda,
      viewer: data.viewer
    }))
  }
  render(){
    const { props: { viewer: viewer } } = this
    return(
      <div className="ui grid">
        <div className="four wide column">
          <div className="ui blue segment">
            <div className="ui header">Форма для создания продукта</div>
            <MebelCreateForm subcategories={viewer.subcategories} onSave={this.handleSave}  categories={viewer.categories} />
          </div>
        </div>
        <div className="four wide column">
          <MebelList  viewer={viewer}  categories={viewer.categories} mebels={viewer.mebels} />
        </div>
      </div>
    )
  }
}
export default  Relay.createContainer(Mebel, {
  prepareVariables(){
    return {
      limit : 100
    }
  },
  fragments: {
    viewer: () => Relay.QL `
    fragment on Viewer {
      subcategories(first: $limit){
      ${MebelCreateForm.getFragment('subcategories')}
      }
      ${MebelList.getFragment('viewer')}
      mebels(first : $limit){
        ${MebelList.getFragment('mebels')}
      }
      categories(first : $limit) {

        ${MebelCreateForm.getFragment('categories')}
      }
      ${AddMebelMutation.getFragment('viewer')}
    }
     `
  }
})
