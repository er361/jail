import Relay from 'react-relay';

export default class UpdateSubCategory extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation{updateSubCategory}`;
  }

  getVariables() {
    return {
      id: this.props.id,
      title: this.props.title
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on updateSubCategoryPayload {
        changedSubCategory {
          title
        }
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        changedSubCategory: this.props.id
      }
    }];
  }

  getOptimisticResponse() {
    return {
      changedTodo: {
        id: this.props.id,
        title: this.props.title
      }
    };
  }
}
