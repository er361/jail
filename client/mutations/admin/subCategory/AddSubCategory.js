import Relay from 'react-relay';


export default class AddSubCategory extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL `fragment on Viewer {
      id
      subcategories {
        count
      }
    }`
  }

  getMutation(){
    return Relay.QL`mutation {addSubCategory}`;
  }

  getVariables(){
    return {
      categoryId: this.props.categoryId,
      title: this.props.title
    }
  }

  getFatQuery(){
    return Relay.QL `
      fragment on addSubCategoryPayload {
        changedSubCategoryEdge
        viewer {
          subcategories {
            count
          }
        }
      }`
  }

  getConfigs() {
    return [
      {
        type: 'RANGE_ADD',
        parentName: 'viewer',
        parentID: this.props.viewer.id,
        connectionName: 'subcategories',
        edgeName: 'changedSubCategoryEdge',
        rangeBehaviors: {
          '': 'prepend'
        }
      }
    ]
  }

}
