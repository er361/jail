import Relay from 'react-relay';

export default class DeleteSubCategoryMutation extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL `fragment on Viewer {
      id
      subcategories {
        count
      }
    }`
  }

  getMutation(){
    return Relay.QL `mutation{deleteSubCategory}`
  }

  getVariables(){
    return {
      id: this.props.id
    }
  }

  getFatQuery(){
    return Relay.QL `
      fragment on deleteSubCategoryPayload {
        id
        viewer {
          id
          categories{
            count
          }
        }
      }
    `
  }

  getConfigs() {
    return [{
      type: 'NODE_DELETE',
      parentName: 'viewer',
      parentID: this.props.viewer.id,
      connectionName: 'subcategories',
      deletedIDFieldName: 'id'
    }];
  }
}
