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
    // console.log(this.props.relay);
    const { props: { viewer:{
      subcategories: subcategories,
      mebels: mebels,
      categories: categories
    }  } } = this
    var krc = this.filter(categories.edges,'Крупно рогатый скот');
    //  console.log(krc);
    return (
      <div>
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
  initialVariables: {
    limit: 100,
    // prodLimit: 4
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
