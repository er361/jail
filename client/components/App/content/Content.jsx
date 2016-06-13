import React from 'react';
import Relay from 'react-relay';
import Slide from './Slide.jsx';
import Krc from './Krc.jsx';
import './contetn.scss';
import ic1 from '../../../assets/icon1.png';
import ic2 from '../../../assets/melki.png';
import ic3 from '../../../assets/petyx_icon.png';
import ic4 from '../../../assets/krolic_icon.png';
import ic5 from '../../../assets/moloko.png';
import slImg from '../../../assets/Cows2.png';
import slImg1 from '../../../assets/br.png';
import slImg2 from '../../../assets/pt.png';
import slImg3 from '../../../assets/krl.png';
import slImg4 from '../../../assets/kz.png';

class Content extends React.Component {
  componentDidMount() {
    $('.ui.modal').modal();
  }
  showModal = () => {
    $('.ui.modal').show();
    console.log('show');
  }
  filter = (data,filter) => {
    var out = [];
    if(Array.isArray(data)){
      out = data.filter(edge => {
        if(edge.node.title == filter)
          return edge
      })
    }
    return out[0];
  }
  render() {
    const { props: { viewer:{
      subcategories: subcategories,
      mebels: mebels,
      categories: categories
    }  } } = this
    var krc = this.filter(categories.edges,'Крупно рогатый скот');
    //  console.log(krc);
    return (
      <div>
        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
          Launch demo modal
        </button>

        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>


        <Slide />
            <img className="icon" whidth="200" height="100" src={ic1} />
        <div className="ui container">
          <Krc  subcategories={subcategories} prod={mebels}>{krc}</Krc>
        </div>
      </div>
    );
  }
}
export default Relay.createContainer(Content, {
  prepareVariables(){
    return {
      limit: 100
    }
  },
  fragments: {
    viewer: () => Relay.QL `
    fragment on Viewer {
      categories(first: $limit){
        edges{
          node{
            _id
            title
          }
        }
      }
      subcategories(first: $limit){
        ${Krc.getFragment('subcategories')}
      }
      mebels(first: $limit) {
        ${Krc.getFragment('prod')}
      }
    }
    `
  }
})
