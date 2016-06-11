import React from 'react';
import Relay from 'react-relay';
import Create from './Create.jsx';
import List  from './List.jsx';

import AddSubCategory from '../../../mutations/admin/subCategory/AddSubCategory.js';

class App extends React.Component {
  handleSave = (data) => {
    // console.log(data);
    data.viewer = this.props.viewer;
    Relay.Store.commitUpdate(new AddSubCategory({
      categoryId: data.categoryId,
      title: data.title,
      viewer: data.viewer
    }));
  }

  render() {
   const { props: { viewer:{categories: categories, subcategories: subcategories} } } = this

    return (
      <div>
        <div className="ui grid">
          <div className="six wide column">
            <div className="ui blue segment">
              <div className="ui header">Форма создания под категории</div>
              <Create onSave={this.handleSave} categories={categories} />
            </div>
          </div>
          <div className="six wide column">
            <div className="ui violet segment">
              <h2 className="ui right floated header">
                Список подкатегории
              </h2>
              <div className="ui clearing divider"></div>
                <List viewer={this.props.viewer} subcategories={subcategories} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  prepareVariables(){
    return {
      limit: 100
    }
  },
  fragments: {
    viewer: () => Relay.QL `
    fragment on Viewer {
      ${List.getFragment('viewer')}
      ${AddSubCategory.getFragment('viewer')}
      categories(first: $limit){
        ${Create.getFragment('categories')}
      }
      subcategories(first: $limit){
        ${List.getFragment('subcategories')}
      }
    }`
  }
})
