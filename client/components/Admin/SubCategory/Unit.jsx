import React from 'react';
import Relay from 'react-relay';
import UnitTextInput from './UnitTextInput.jsx';

//mutations
import UpdateSubCategory from '../../../mutations/admin/subCategory/UpdateSubCategory.js';
import DeleteSubCategory from '../../../mutations/admin/subCategory/DeleteSubCategory.js';

class Unit extends React.Component {

  state = {
      isEditing: false
  }

  handleDestoyClick = () => {
    //debug
    if(process.env.NODE_ENV == "development")
      console.log('delete');

    // delete category
    Relay.Store.commitUpdate(new DeleteSubCategory({
      id: this.props.subcategory.id,
      viewer: this.props.viewer
    }))
  }

  handleEdit = () => {
    this.setState({
      isEditing: true
    });
    this.makeInput();
  }

  handleInputCancel = () => {
    this.setState({
      isEditing: false
    });
  }

  handleInputDelete =() => {
    this.setState({
      isEditing: false
    });
  }

  handleInputSave = (text) => {
    Relay.Store.commitUpdate(new UpdateSubCategory ({
      id: this.props.subcategory.id,
      title: text
    }))
    this.setState({
      isEditing: false
    });
  }
  makeInput = () => {
    let text = this.props.subcategory.title;
    if (this.state.isEditing) {
        return(
          <UnitTextInput
            initialValue = {text}
            saveOnBlur = {true}
            onSave = {this.handleInputSave}
            onCancel = {this.handleInputCancel}
            onDelete = {this.handleInputDelete}/>

        )
    } else {
      return null;
    }
  }
  render() {
    const { props: { subcategory: subcategory } } = this
    return (
      <div className="item">
        <div className="right floated content">
          <div onClick={this.handleEdit} className="ui tiny blue basic button">Edit</div>
          <div onClick={this.handleDestoyClick} className="ui tiny red basic button">Delete</div>
        </div>
        <div className="content">{this.state.isEditing ? null : subcategory.title}{this.makeInput()}</div>
      </div>
    );
  }
}

export default Relay.createContainer(Unit, {
  fragments: {
    viewer: () => Relay.QL `
    fragment on Viewer {
      ${DeleteSubCategory.getFragment('viewer')}
    }
    `,
    subcategory: () => Relay.QL `
    fragment on SubCategory {
      id
      title
    }`
  }
})
