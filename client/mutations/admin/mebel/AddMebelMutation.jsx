 import Relay from 'react-relay';

 export default class AddMebelMutation extends Relay.Mutation {
   static fragments = {
     viewer: () => Relay.QL `fragment on Viewer {
       id
     }`
   }
   getMutation(){
     return Relay.QL `mutation {addMebel}`
   }
   getVariables(){
     return {
       categoryId: this.props.categoryId,
       subcategoryId: this.props.subcategoryId,
       title: this.props.title,
       img: this.props.img,
       price: this.props.price,
       poroda: this.props.poroda,
       art: this.props.art
     }
   }
   getFatQuery(){
     return Relay.QL `
     fragment on addMebelPayload {
       changedMebelEdge
       viewer {
         mebels{
           count
         }
       }
     }`
   }
   getConfigs(){
     return [
       {
         type: 'RANGE_ADD',
         parentName: 'viewer',
         parentID: this.props.viewer.id,
         connectionName: 'mebels',
         edgeName: 'changedMebelEdge',
         rangeBehaviors: {
           '': 'prepend'
         }
       }
     ]
   }
 }
