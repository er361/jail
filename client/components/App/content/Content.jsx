import React from 'react';
import Relay from 'react-relay';
import Slide from './Slide.jsx';
import Krc from './Krc.jsx';
import BezCat from './BezCat.jsx';
import StaticMoloko from './StaticMoloko.jsx';
import './Contetn.scss';
import krc_ic from '../../../assets/icons/krc.gif';
import mrc_ic from '../../../assets/icons/mrc.gif';
import ptc_ic from '../../../assets/icons/ptc.gif';
import kro_ic from '../../../assets/icons/krol.gif';
import moloko_ic from '../../../assets/icons/molpko.gif';

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
  makeIcon = (img) => {
    return(
      <div className="icon">
        <div className="iconWrapper">
          <img className="iconImage" src={img} />
        </div>
      </div>
    )

  }
  render() {
    // console.log(this.props.relay);
    const { props: { viewer:{
      subcategories: subcategories,
      mebels: mebels,
      categories: categories
    }  } } = this
    var krc = this.filter(categories.edges,'Крупно рогатый скот');
    var mrc = this.filter(categories.edges, 'Мелкий рогатый скот');
    var ptc = this.filter(categories.edges, 'Птица');
    var krol = this.filter(categories.edges, 'Кролики');
    var moloko = this.filter(categories.edges,'Молоко');
    //  console.log(krc);
    return (
      <div>
        <Slide />
        <div className="ui container">
          {this.makeIcon(krc_ic)}
          <Krc  subcategories={subcategories} prod={mebels}>{krc}</Krc>
          {this.makeIcon(mrc_ic)}
          <Krc subcategories={subcategories} prod={mebels}>{mrc}</Krc>
          {this.makeIcon(ptc_ic)}
          <Krc subcategories={subcategories} prod={mebels}>{ptc}</Krc>
          {this.makeIcon(kro_ic)}
          <BezCat prod={mebels}>{krol}</BezCat>
          {this.makeIcon(moloko_ic)}
          <StaticMoloko prod={mebels}>{moloko}</StaticMoloko>
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
        ${BezCat.getFragment('prod')}
        ${StaticMoloko.getFragment('prod')}
      }
    }
    `
  }
})
